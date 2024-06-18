"use client"
import React, { createContext, useState, useContext } from 'react';

const DrawerContext = createContext({
    isOpen: false,
    toggleDrawer: () => { }
});

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setNewOpen] = useState(false);

    const toggleDrawer = () => {
        setNewOpen(prevOpen => !prevOpen);
        console.log(isOpen);
    };


    return (
        <DrawerContext.Provider value={{ isOpen, toggleDrawer }}>
            {children}
        </DrawerContext.Provider>
    );
};

export const useDrawer = () => useContext(DrawerContext);
