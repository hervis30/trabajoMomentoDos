import { Text, View } from 'react-native'
import React, { useState } from 'react';
import { createContext } from 'react';


export const AppProvider = createContext();

export const AppContext = ({ children }) => {
    const [vista, setVista] = useState(false);
    return (
        <AppProvider.Provider value={{ vista, setVista }}>
            {children}
        </AppProvider.Provider>
    )
};

export default AppContext;