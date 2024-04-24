import React from "react"
import CadastroDeLivrosWrapper from "@/components/Layout/Livros/Salvar"
import { ParamsWithId } from "@/@types/types"

export default function Page({ params: { id } }: ParamsWithId) {
    return (
        <CadastroDeLivrosWrapper apiUrl={`${process.env.API_URL}`} dataId={id} />
    )
}