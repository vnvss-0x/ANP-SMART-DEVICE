import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";

function DeviceCreateForm() {
    const navigate = useNavigate();
    const [device, setDevice] = useState({
        device_name: " ",
        device_type: "PC",
        serial_number: " ",
        purchase_date: "",
        model_number:1,
        warranty_expiry_date: " ",
        status: "in service",
        location: "ANP Jorf Lasfar",
        purchase_cost: 1,
        employee_id: "",
    });

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
            await axios.post(`${API_BASE_URL}/api/devices`, device);
            navigate("/devices");
        } catch (error) {
            console.error("Error creating device:", error);
        }
    };

    const handleCancel = () => {
        navigate("/devices");
    };

    return (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Create Device
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="device_name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Device Name
                    </label>
                    <input
                        type="text"
                        id="device_name"
                        name="device_name"
                        value={device.device_name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="device_type"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Device Type
                    </label>
                    <select
                        id="device_type"
                        name="device_type"
                        value={device.device_type}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                        required
                    >
                        <option value="PC">PC</option>
                        <option value="Printer">Printer</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="serial_number"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Serial Number
                    </label>
                    <input
                        type="text"
                        id="serial_number"
                        name="serial_number"
                        value={device.serial_number}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="purchase_date"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Purchase Date
                    </label>
                    <input
                        type="date"
                        id="purchase_date"
                        name="purchase_date"
                        value={device.purchase_date}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="warranty_expiry_date"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Warranty Expiry Date
                    </label>
                    <input
                        type="date"
                        id="warranty_expiry_date"
                        name="warranty_expiry_date"
                        value={device.warranty_expiry_date}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="status"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Status
                    </label>
                    <input
                        type="text"
                        id="status"
                        name="status"
                        value={device.status}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={device.location}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="purchase_cost"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Purchase Cost
                    </label>
                    <input
                        type="number"
                        id="purchase_cost"
                        name="purchase_cost"
                        value={device.purchase_cost}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="employee_id"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Employee ID
                    </label>
                    <input
                        type="number"
                        id="employee_id"
                        name="employee_id"
                        value={device.employee_id}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white"
                        required
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-400"
                    >
                        Create Device
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default DeviceCreateForm;
