import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Devices from "./views/Devices";
import Maintainance from "./views/Maintainance";
import Users from "./views/Users";
import UserList from "./components/UserList";
import ListDevices from "./components/DevicesList";
import DeviceEditForm from "./components/DeviceEditForm";
import DeviceCreateForm from "./components/DeviceCreateForm";
import EmpLayout from "./components/EmpLayout";
import EmpMaintenaceRequest from "./components/EmpMaintenanceRequest";
import EmpHome from "./components/EmpHome";
import EmpProfile from "./components/EmpProfile";

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/users",
                element: <Users />,
                children: [
                    {
                        path: "",
                        element: <UserList />,
                    },
                ],
            },
            {
                path: "/devices",
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
                path: "/maintainance",
                element: <Maintainance />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },

    {
        path: "/Employee",
        element: <EmpLayout />,
        children: [
            {
                path: "home",
                element: <EmpHome />,
            },
            {
                path: "MaintenaceRequest",
                element: <EmpMaintenaceRequest />,
            },
            {
                path: "Profile",
                element: <EmpProfile />,
            },
        ],
    },
]);
export default router;
