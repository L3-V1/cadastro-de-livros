"use client"

import React from "react"
import { SnackbarProvider } from 'notistack'
import { DataProvider } from "@/contexts/DataContext"
import { ServerData } from "@/@types/types"
import Home from "./Home"

const HomeWrapper = ({ ...rest }: ServerData) => {
    return (
        <SnackbarProvider>
            <DataProvider {...rest}>
                <Home />
            </DataProvider>
        </SnackbarProvider>
    )
}

export default HomeWrapper