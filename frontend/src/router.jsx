import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Devices from "./views/Devices";
import Maintenance from "./views/Maintenance";
import Users from "./views/Users";
import UserList from "./components/UserList";
import ListDevices from "./components/DevicesList";
import DeviceEditForm from "./components/DeviceEditForm";
import DeviceCreateForm from "./components/DeviceCreateForm";
import EmpLayout from "./components/EmpLayout";
import EmpMaintenanceRequest from "./components/EmpMaintenanceRequest";
import EmpHome from "./components/EmpHome";
import EmpProfile from "./components/EmpProfile";

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <DefaultLayout />,
        children: [
            {
                path: "",
                element: <Navigate to="/admin/dashboard" />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "users",
                element: <Users />,
                children: [
                    {
                        path: "",
                        element: <UserList />,
                    },
                ],
            },
            {
                path: "devices",
                element: <Devices />,
                children: [
                    {
                        path: "",
                        element: <ListDevices />,
                    },
                    {
                        path: "edit/:id",
                        element: <DeviceEditForm />,
                    },
                    {
                        path: "new",
                        element: <DeviceCreateForm />,
                    },
                ],
            },
            {
                path: "maintenance",
                element: <Maintenance />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
    {
        path: "/employee",
        element: <EmpLayout />,
        children: [
            {
                path: "home",
                element: <EmpHome />,
            },
            {
                path: "maintenance-request",
                element: <EmpMaintenanceRequest />,
            },
            {
                path: "profile",
                element: <EmpProfile />,
            },
        ],
    },
    // Fallback route for undefined paths
    
]);

export default router;
