"use client"

import { useData } from "@/contexts/DataContext";
import { deleteLivro } from "@/service/LivroService";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";

export default function useDeleteLivro() {
    const { apiUrl } = useData()
    const { enqueueSnackbar } = useSnackbar()
    const [isDeleting, setIsDeleting] = useState<boolean>(false)
    const [hasDeleted, setHasDeleted] = useState<boolean>(false)

    const router = useRouter()

    useEffect(() => {
        if(!hasDeleted) return
        setTimeout(() => {
            router.push("/livros/listar")
        }, 1000)
    }, [hasDeleted, router])

    const handleDelete = async (dataId:string) => {
        try {
            if(confirm("Deseja mesmo excluir esse registro?")){
                setIsDeleting(true)
                const result = await deleteLivro(apiUrl, dataId)
                if(!!result){
                    enqueueSnackbar("Livro excluído com sucesso!", { variant:"success" })
                    setHasDeleted(true)
                } else {
                    enqueueSnackbar("Erro ao excluir livro! Tente mais tarde.", { variant:"error" })
                }
            }
        } catch(err:unknown) {
            enqueueSnackbar(`${err}`, { variant:"error" })
        } finally {
            setIsDeleting(false)
        }
    }

    return { isDeleting, handleDelete }
}