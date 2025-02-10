import { useState } from "react";
import { AppContext } from "../context/AppContext";

export function AppProvider({ children }) {
    const [state, setState] = useState({
        user: null,
        isAuth: false,
        username: '',
        email: '',
        isLoading: true,
    })

    const value = {
        state,
        setState,
        login: (user) => {
            setState((prevState) => ({
                ...prevState,
                user,
                isAuth: true,
            }));
        },
        logout: () => {
            setState((prevState) => ({
                ...prevState,
                user: null,
                isAuth: false,
            }));
        },
        setUsername: (username) => {
            setState((prevState) => ({
                ...prevState,
                username,
            }));
        },
        setEmail: (email) => {
            setState((prevState) => ({
                ...prevState,
                email,
            }));
        },
        setLoading: (isLoading) => {
            setState((prevState) => ({
                ...prevState,
                isLoading,
            }));
        },
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

