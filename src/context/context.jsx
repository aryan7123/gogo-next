import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    return(
        <AppContext.Provider value={{
            showPassword,
            showConfirmPassword,
            handleShowPassword,
            handleShowConfirmPassword
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };