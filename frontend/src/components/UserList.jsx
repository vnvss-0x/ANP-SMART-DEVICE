import { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import EditUserForm from "./EditUserForm";
import AddUserForm from "./AddUserForm"; // Import the AddUserForm
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

function UserList() {
    const { users, deleteUser, updateUser, addUser } = useStateContext(); // Add addUser to the context
    const [currentPage, setCurrentPage] = useState(1);
    const [userToDelete, setUserToDelete] = useState(null);
    const [userToEdit, setUserToEdit] = useState(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isEditFormOpen, setIsEditFormOpen] = useState(false);
    const [isAddFormOpen, setIsAddFormOpen] = useState(false); // Add state for AddUserForm
    const usersPerPage = 6;
    const pageRangeDisplayed = 1; // Number of pages to display before and after the current page

    // Calculate the total number of pages
    const totalPages = Math.ceil(users.length / usersPerPage);

    // Calculate the index of the first and last user of the current page
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Pagination logic
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        setCurrentPage(1); // Reset to the first page when users change
    }, [users]);

    // Function to get role name based on role_id
    const getRoleName = (roleId) => {
        switch (roleId) {
            case 1:
                return "Admin";
            case 2:
                return "Technician";
            case 3:
                return "User";
            default:
                return "Unknown";
        }
    };

    // Generate an array of page numbers to display
    const getPageNumbers = () => {
        const pageNumbers = [];
        let startPage = Math.max(1, currentPage - pageRangeDisplayed);
        let endPage = Math.min(totalPages, currentPage + pageRangeDisplayed);

        // Add previous pages ellipsis if needed
        if (startPage > 1) {
            pageNumbers.push(1, "...");
        }

        // Add page numbers in the range
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        // Add next pages ellipsis if needed
        if (endPage < totalPages) {
            pageNumbers.push("...", totalPages);
        }

        return pageNumbers;
    };

    // Handle delete button click
    const handleDeleteClick = (userId) => {
        setUserToDelete(userId);
        setIsDeleteDialogOpen(true);
    };

    // Handle confirm delete
    const handleConfirmDelete = () => {
        deleteUser(userToDelete);
        setIsDeleteDialogOpen(false);
    };

    // Handle edit button click
    const handleEditClick = (user) => {
        setUserToEdit(user);
        setIsEditFormOpen(true);
    };

    // Handle save edited user
    const handleSaveEdit = (userId, updatedData) => {
        updateUser(userId, updatedData);
        setIsEditFormOpen(false);
    };

    // Handle save new user
    const handleSaveNewUser = (newUserData) => {
        addUser(newUserData);
        setIsAddFormOpen(false);
    };

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-between p-4">
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-white">User List</h1>
                    <FontAwesomeIcon
                        icon={faUserPlus}
                        style={{ color: "#9ca3af" }}
                        className="cursor-pointer h-6 p-2"
                        onClick={() => setIsAddFormOpen(true)}
                    />
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                UserName
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user) => (
                            <tr
                                key={user.employee_id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {user.employee_id}
                                </th>
                                <td className="px-6 py-4">{user.username}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">
                                    {getRoleName(user.role_id)}
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleEditClick(user)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteClick(user.employee_id)}
                                        className="font-medium text-red-600 dark:text-red-500 hover:underline ml-4"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                {getPageNumbers().map((pageNumber, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (pageNumber !== "...") {
                                paginate(pageNumber);
                            }
                        }}
                        className={`mx-1 px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none ${
                            currentPage === pageNumber
                                ? "bg-blue-500 dark:bg-blue-500 text-white"
                                : "text-gray-800 dark:text-gray-300"
                        } hover:bg-blue-300 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white`}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
            <ConfirmDeleteDialog
                isOpen={isDeleteDialogOpen}
                onClose={() => setIsDeleteDialogOpen(false)}
                onConfirm={handleConfirmDelete}
            />
            <EditUserForm
                isOpen={isEditFormOpen}
                onClose={() => setIsEditFormOpen(false)}
                onSave={handleSaveEdit}
                user={userToEdit}
            />
            <AddUserForm
                isOpen={isAddFormOpen}
                onClose={() => setIsAddFormOpen(false)}
                onSave={handleSaveNewUser}
            />
        </>
    );
}

export default UserList;
