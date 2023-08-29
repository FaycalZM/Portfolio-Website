import React, { createContext, useContext, useState } from 'react'


const DataContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {

    const [menuOpened, setMenuOpened] = useState(false);


    return (
        <DataContext.Provider
            value={{
                menuOpened,
                setMenuOpened
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider