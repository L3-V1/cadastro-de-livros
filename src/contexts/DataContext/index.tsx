"use client"

import { ServerData } from "@/@types/types"
import { PropsWithChildren, createContext, useContext } from "react"

const DataContext = createContext<ServerData>({} as ServerData)

export const DataProvider = ({ children, ...rest }: PropsWithChildren<ServerData>) => {
    return (
        <DataContext.Provider value={{ ...rest }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)