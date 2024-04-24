"use client"

import { useData } from "@/contexts/DataContext";
import { getCategorias } from "@/service/CategoriaService";
import { Categoria } from "@/utils/schemas";
import { useEffect, useState } from "react";

export default function useCategorias() {
    const { apiUrl } = useData()
    const [loading, setLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                setCategorias(await getCategorias(apiUrl))
            } finally {
                setLoading(false)
            }
        })()
    }, [apiUrl])

    return { loading, categorias }
}