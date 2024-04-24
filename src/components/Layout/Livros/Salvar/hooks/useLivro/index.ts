"use client"

import { useData } from "@/contexts/DataContext";
import { getLivroById } from "@/service/LivroService";
import { Livro } from "@/utils/schemas";
import { useEffect, useState } from "react";

export default function useLivro() {
    const { apiUrl, dataId } = useData()
    const [isFetching, setIsFetching] = useState<boolean>(false)
    const [livro, setLivro] = useState<Livro>()

    useEffect(() => {
        (async () => {
            if(!dataId) return
            try {
                setIsFetching(true)
                setLivro(await getLivroById(apiUrl, dataId))
            } finally {
                setIsFetching(false)
            }
        })()
    }, [apiUrl, dataId])

    return { isFetching, livro }
}