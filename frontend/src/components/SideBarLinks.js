// links.js
import { faComputer, faUser, faHome, faWrench } from '@fortawesome/free-solid-svg-icons';

export const adminLinks = [
    { to: "dashboard", label: "Dashboard", icon: faHome },
    { to: "devices", label: "Devices", icon: faComputer },
    { to: "users", label: "Users", icon: faUser },
    { to: "maintenance", label: "Maintenance", icon: faWrench },
];

export const employeeLinks = [
    { to: "home", label: "Home", icon: faHome },
    { to: "devices", label: "Request New Device", icon: faComputer },
    { to: "profile", label: "Profile", icon: faUser },
    { to: "maintenance-request", label: "Request Maintenance", icon: faWrench },
];
