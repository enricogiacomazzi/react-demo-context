import React, {useContext, useState} from 'react';

export interface MyContextValue {
    theme: string;
    fontSize: string;
    changeTheme: (value: string) => void
}

export const MyContext = React.createContext<Partial<MyContextValue>>({});


export const ThemeProvider: React.FC = ({children}) => {

    const [contextState, setContextState] = useState<MyContextValue>({
        theme: 'dark',
        fontSize: 'small',
        changeTheme: (theme) => {
            setContextState({
                ...contextState,
                theme
            });
        }
    });

    return (
        <MyContext.Provider value={contextState}>
            {children}
        </MyContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(MyContext);
    return context;
}


