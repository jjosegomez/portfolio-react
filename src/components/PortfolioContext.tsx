import React, { createContext, ReactNode, useState } from 'react';

// contexts props is the variables or data shared to all children
export type PortfolioContextProps = {
    currentState: number;
    updateCurrentState: (newCurrentState: number) => void;
}


// settting default values
const PortfolioContext = createContext<PortfolioContextProps>({
    currentState: 0,
    updateCurrentState: () => { },
});


interface PortfolioProviderProps {
    children: ReactNode;
}


const PortfolioProvider: React.FC<PortfolioProviderProps> = ({ children }) => {
    const [currentState, setCurrentState] = useState<number>(0)
    const updateCurrentState = (newCurrentState: number) => {
        console.log("Updating state to: ", newCurrentState); // Debugging line
        setCurrentState(newCurrentState);
    };
    


    const contextValue: PortfolioContextProps = {
        currentState,
        updateCurrentState,
    };


    return <PortfolioContext.Provider value={contextValue}>{children}</PortfolioContext.Provider>;
};

export { PortfolioProvider, PortfolioContext };
