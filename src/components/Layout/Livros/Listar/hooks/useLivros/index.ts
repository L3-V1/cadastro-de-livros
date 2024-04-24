"use client"

import { useData } from "@/contexts/DataContext";
import { getLivros } from "@/service/LivroService";
import { Livro } from "@/utils/schemas";
import { useEffect, useState } from "react";

export default function useLivros() {
    const { apiUrl } = useData()
    const [loading, setLoading] = useState<boolean>(false)
    const [livros, setLivros] = useState<Livro[]>([])

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                setLivros(await getLivros(apiUrl))
            } finally {
                setLoading(false)
            }
        })()
    }, [apiUrl])

    return { loading, livros }
}