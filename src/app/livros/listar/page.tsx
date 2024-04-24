import React from "react"
import ListagemDeLivrosWrapper from "@/components/Layout/Livros/Listar"

export default function Page() {
    return (
        <ListagemDeLivrosWrapper apiUrl={`${process.env.API_URL}`} />
    )
}