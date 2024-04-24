import React from "react"
import CadastroDeLivrosWrapper from "@/components/Layout/Livros/Salvar"

export default function Page() {
    return (
        <CadastroDeLivrosWrapper apiUrl={`${process.env.API_URL}`} />
    )
}