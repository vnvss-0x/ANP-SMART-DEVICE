import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";

function DeviceEditForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [device, setDevice] = useState({
        device_name: "",
        device_type: "",
        serial_number: "",
        employee_id: "",
        warranty_expiry_date: "",
    });

    useEffect(() => {
        const fetchDevice = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/devices/${id}`);
                setDevice(response.data);
            } catch (error) {
                console.error("Error fetching device data:", error);
            }
        };

        fetchDevice();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDevice((prevDevice) => ({
            ...prevDevice,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${API_BASE_URL}/api/devices/${id}`, device);
            navigate("/devices");
        } catch (error) {
            console.error("Error updating device:", error);
        }
    };

    const handleCancel = () => {
        navigate("/devices");
    };

    return (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Edit Device</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="device_name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Device Name
                    </label>
                    <input
                        type="text"
                        name="device_name"
                        value={device.device_name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="device_type" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Device Type
                    </label>
                    <input
                        type="text"
                        name="device_type"
                        value={device.device_type}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="serial_number" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Serial Number
                    </label>
                    <input
                        type="text"
                        name="serial_number"
                        value={device.serial_number}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="employee_id" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Employee ID
                    </label>
                    <input
                        type="text"
                        name="employee_id"
                        value={device.employee_id}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="warranty_expiry_date" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Warranty Expiry Date
                    </label>
                    <input
                        type="date"
                        name="warranty_expiry_date"
                        value={device.warranty_expiry_date.split("T")[0]}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 shadow-sm"
                        required
                    />
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-200 rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded-md"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default DeviceEditForm;
