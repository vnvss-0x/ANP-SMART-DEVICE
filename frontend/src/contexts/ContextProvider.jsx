import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { API_BASE_URL } from '../config';
import axios from 'axios'; // Import Axios

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    users: [],
    setCurrentUser: () => {},
    setUserToken: () => {},
    deleteUser: () => {}, // Add deleteUser to the context
    updateUser: () => {}, // Add updateUser to the context
    addUser: () => {}, // Add addUser to the context
});

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
    });
    const [userToken, setUserToken] = useState("123");
    const [users, setUsers] = useState([]);



    // Fetch users data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/employees`);
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const deleteUser = async (userId) => {
        try {
            await axios.delete(`${API_BASE_URL}/api/employees/${userId}`);
            // Update the users state after successful deletion
            setUsers(users.filter(user => user.employee_id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const updateUser = async (userId, updatedData) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/api/employees/${userId}`, updatedData);
            const updatedUser = response.data;

            setUsers(
                users.map((user) =>
                    user.employee_id === userId ? updatedUser : user
                )
            );
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const addUser = async (newUserData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/signup`, newUserData);
            const newUser = response.data;
            setUsers((prevUsers) => [...prevUsers, newUser]);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <StateContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                userToken,
                setUserToken,
                users,
                setUsers,
                deleteUser, // Provide deleteUser in the context
                updateUser, // Provide updateUser in the context
                addUser, // Provide addUser in the context
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext);
