"use client"

import React, { forwardRef, ForwardRefRenderFunction, useCallback, useEffect, useImperativeHandle, useRef } from "react"
import { Livro } from "@/utils/schemas"
import { Grid, LinearProgress, TextField } from "@mui/material"
import { useFormContext } from "react-hook-form"
import Categoria, { CategoriaAttributes } from "./controlled_fields/Categoria"

type FormLivrosProps = {
    livro?:Livro,
    isFetching?:boolean
}

export type FormLivrosAttributes = {
    clearFields: () => void
}

const FormLivros:ForwardRefRenderFunction<FormLivrosAttributes, FormLivrosProps> = ({ livro, isFetching=false }, ref) => {
    const {
        reset,
        register,
        formState: { errors }
    } = useFormContext<Livro>()

    const categoriaRef = useRef<CategoriaAttributes>(null)

    const clearFields = useCallback(() => {
        reset({ isbn: "", titulo: "", autor: "", ano: 0 })
        categoriaRef.current?.clearCategoria()
    }, [reset])

    useImperativeHandle(ref, () => {
        return { clearFields }
    }, [clearFields])

    useEffect(() => {
        if(livro) reset(livro)
    }, [livro, reset])

    return (
        <Grid container spacing={3}>
            {
                isFetching &&
                <Grid item xs={12}>
                    <div className="w-full">
                        <LinearProgress variant="indeterminate" />
                    </div>
                </Grid>
            }

            <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="ISBN"
                    variant="outlined"
                    InputLabelProps={livro?.isbn ? { shrink:true } : {}}
                    disabled={isFetching}
                    error={!!errors.isbn}
                    helperText={errors.isbn?.message}
                    {...register("isbn")}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Título"
                    variant="outlined"
                    InputLabelProps={livro?.titulo ? { shrink:true } : {}}
                    disabled={isFetching}
                    error={!!errors.titulo}
                    helperText={errors.titulo?.message}
                    {...register("titulo")}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Autor"
                    variant="outlined"
                    InputLabelProps={livro?.autor ? { shrink:true } : {}}
                    disabled={isFetching}
                    error={!!errors.autor}
                    helperText={errors.autor?.message}
                    {...register("autor")}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Ano"
                    variant="outlined"
                    InputLabelProps={livro?.ano ? { shrink:true } : {}}
                    disabled={isFetching}
                    error={!!errors.ano}
                    helperText={errors.ano?.message}
                    {...register("ano")}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <Categoria
                    ref={categoriaRef}
                    defaultValue={livro?.categoria}
                    isFetching={isFetching}
                />
            </Grid>
        </Grid>
    )
}

export default forwardRef(FormLivros)