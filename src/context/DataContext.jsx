import { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {


    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json'}
        };

        // fetch(`http://localhost:8081//${queryOption.version}//${queryOption.table}?page=${queryOption.page}&size=${queryOption.size}&sort=${queryOption.sort},${queryOption.order}`, options)
        fetch(`https://jsonplaceholder.typicode.com//${queryOption.table}`, options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));
    }

    const contextValue = {
        data,
    }

    return (
        <DataContext.Provider value={{...props}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;