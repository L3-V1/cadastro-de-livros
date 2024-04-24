"use client"

import React from "react"
import { ServerData } from "@/@types/types"
import { DataProvider } from "@/contexts/DataContext"
import { SnackbarProvider } from "notistack"
import CadastroDeLivros from "./CadastroDeLivros"

const CadastroDeLivrosWrapper = ({ ...rest }: ServerData) => {
    return (
        <SnackbarProvider>
            <DataProvider {...rest}>
                <CadastroDeLivros />
            </DataProvider>
        </SnackbarProvider>
    )
}

export default CadastroDeLivrosWrapper