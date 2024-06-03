// src/components/AddUserForm.jsx
import { useState } from "react";
import PropTypes from "prop-types";

const AddUserForm = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "", // Add password field
        password_confirmation: "", // Add password field
        role_id: 3, // Default to "User"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Add User
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-gray-700 dark:text-gray-300"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            autoComplete="name"
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 dark:text-gray-300"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 dark:text-gray-300"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            autoComplete="off"
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password_confirmation"
                            className="block text-gray-700 dark:text-gray-300"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            value={formData.password_confirmation}
                            autoComplete="off"
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="role_id"
                            className="block text-gray-700 dark:text-gray-300"
                        >
                            Role
                        </label>
                        <select
                            id="role_id"
                            name="role_id"
                            value={formData.role_id}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                            <option value={1}>Admin</option>
                            <option value={2}>Technician</option>
                            <option value={3}>User</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

AddUserForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
};

export default AddUserForm;
