"use client"

import React from "react"
import { ServerData } from "@/@types/types"
import { DataProvider } from "@/contexts/DataContext"
import { SnackbarProvider } from "notistack"
import ListagemDeLivros from "./ListagemDeLivros"

const ListagemDeLivrosWrapper = ({ ...rest }: ServerData) => {
    return (
        <SnackbarProvider>
            <DataProvider {...rest}>
                <ListagemDeLivros />
            </DataProvider>
        </SnackbarProvider>
    )
}

export default ListagemDeLivrosWrapper