import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useState, useEffect } from 'react';
import EmpSidebar from "./EmpSideBar";
import Navbar from "./NavBar";

function EmpLayout() {
    const { userToken } = useStateContext();

    // Dark mode state management
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
 
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    if (!userToken) {
        return <Navigate to="/login" />;
    }

    return (
        <div className={`App ${darkMode ? 'dark' : ''}`}>
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
            <EmpSidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 mt-14">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default EmpLayout;
