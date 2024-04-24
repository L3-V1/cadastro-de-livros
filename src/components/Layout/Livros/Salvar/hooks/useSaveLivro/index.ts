"use client"

import { useData } from "@/contexts/DataContext";
import { saveLivro } from "@/service/LivroService";
import { Livro } from "@/utils/schemas";
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function useSaveLivro() {
    const { apiUrl } = useData()
    const { enqueueSnackbar } = useSnackbar()
    const [isSaving, setIsSaving] = useState<boolean>(false)

    const handleSave = async (formData:Livro) => {
        try {
            setIsSaving(true)
            const result = await saveLivro(apiUrl, formData)
            if(!!result){
                enqueueSnackbar("Livro salvo com sucesso!", { variant:"success" })
            } else {
                enqueueSnackbar("Erro ao salvar livro! Tente mais tarde.", { variant:"error" })
            }
        } catch(err:unknown) {
            enqueueSnackbar(`${err}`, { variant:"error" })
        } finally {
            setIsSaving(false)
        }
    }

    return { isSaving, handleSave }
}