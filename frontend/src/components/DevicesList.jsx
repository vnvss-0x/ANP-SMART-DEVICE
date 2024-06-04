import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopMedical } from '@fortawesome/free-solid-svg-icons';

function DeviceList() {
    const [devices, setDevices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [deviceToDelete, setDeviceToDelete] = useState(null);
    const devicesPerPage = 10;
    const pageRangeDisplayed = 1;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDevices = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/devices`);
                setDevices(response.data);
            } catch (error) {
                console.error('Error fetching devices data:', error);
            }
        };

        fetchDevices();
    }, []);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(devices.length / devicesPerPage);

    const indexOfLastDevice = currentPage * devicesPerPage;
    const indexOfFirstDevice = indexOfLastDevice - devicesPerPage;
    const currentDevices = devices.slice(indexOfFirstDevice, indexOfLastDevice);

    const getPageNumbers = () => {
        const pageNumbers = [];
        let startPage = Math.max(1, currentPage - pageRangeDisplayed);
        let endPage = Math.min(totalPages, currentPage + pageRangeDisplayed);

        if (startPage > 1) {
            pageNumbers.push(1);
            if (startPage > 2) {
                pageNumbers.push("...");
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pageNumbers.push("...");
            }
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US');
    };

    const handleEditClick = (deviceId) => {
        navigate(`/devices/edit/${deviceId}`);
    };

    const handleDeleteClick = (deviceId) => {
        setDeviceToDelete(deviceId);
        setIsDeleteDialogOpen(true);
    };

    const handleConfirmDelete = async () => {
        try {
            await axios.delete(`${API_BASE_URL}/api/devices/${deviceToDelete}`);
            setDevices(devices.filter(device => device.device_id !== deviceToDelete));
            console.log("Device deleted successfully.");
        } catch (error) {
            console.error('Error deleting device:', error);
        } finally {
            setIsDeleteDialogOpen(false);
            setDeviceToDelete(null);
        }
    };

    const handleCloseDeleteDialog = () => {
        setIsDeleteDialogOpen(false);
        setDeviceToDelete(null);
    };

    const handleCreateDeviceClick = () => {
        navigate("/admin/devices/new");
    };

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-between p-4">
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Device List</h1>
                    <button onClick={handleCreateDeviceClick}>
                        <FontAwesomeIcon icon={faLaptopMedical} className="cursor-pointer h-6 p-2" style={{ color: "#9ca3af" }} />
                    </button>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Device ID</th>
                            <th scope="col" className="px-6 py-3">Device Name</th>
                            <th scope="col" className="px-6 py-3">Device Type</th>
                            <th scope="col" className="px-6 py-3">Serial Number</th>
                            <th scope="col" className="px-6 py-3">Owner</th>
                            <th scope="col" className="px-6 py-3">Warranty Expiry Date</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentDevices.map((device) => (
                            <tr key={device.device_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{device.device_id}</td>
                                <td className="px-6 py-4">{device.device_name}</td>
                                <td className="px-6 py-4">{device.device_type}</td>
                                <td className="px-6 py-4 truncate" title={device.serial_number}>{device.serial_number.slice(0, 8)}...</td>
                                <td className="px-6 py-4">{device.employee.username}</td>
                                <td className="px-6 py-4">{formatDate(device.warranty_expiry_date)}</td>
                                <td className="px-6 py-4">
                                    <button
                                        onClick={() => handleEditClick(device.device_id)}
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteClick(device.device_id)}
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
                            currentPage === pageNumber ? "bg-blue-500 dark:bg-blue-500 text-white" : "text-gray-800 dark:text-gray-300"
                        } hover:bg-blue-300 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white`}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
            <ConfirmDeleteDialog
                isOpen={isDeleteDialogOpen}
                onClose={handleCloseDeleteDialog}
                onConfirm={handleConfirmDelete}
            />
        </>
    );
}

export default DeviceList;
