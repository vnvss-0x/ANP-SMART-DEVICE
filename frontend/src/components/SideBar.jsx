import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faUser, faHome, faWrench } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ links }) => {
    return (
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-60 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {links.map(({ to, label, icon }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                style={({ isActive }) => ({
                                    background: isActive ? "#0284C7" : "",
                                })}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <FontAwesomeIcon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" icon={icon} />
                                <span className="ms-3">{label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
