"use client"

import { Categoria as Cat, Livro } from "@/utils/schemas"
import React, { forwardRef, ForwardRefRenderFunction, useCallback, useEffect, useImperativeHandle, useState } from "react"
import useCategorias from "../../hooks/useCategorias"
import { useFormContext } from "react-hook-form"
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"

type CategoriaProps = {
    defaultValue?:Cat,
    isFetching?:boolean
}

export type CategoriaAttributes = {
    clearCategoria: () => void
}

const Categoria:ForwardRefRenderFunction<CategoriaAttributes, CategoriaProps> = ({ defaultValue, isFetching=false }, ref) => {
    const {
        setValue,
        formState: { errors }
    } = useFormContext<Livro>()

    const { loading, categorias } = useCategorias()

    const [categoria, setCategoria] = useState<string>(defaultValue ? JSON.stringify(defaultValue) : "")

    const clearCategoria = useCallback(() => {
        setCategoria("")
        setValue("categoria", {} as Cat)
    }, [setValue])

    useImperativeHandle(ref, () => {
        return { clearCategoria }
    }, [clearCategoria])

    useEffect(() => {
        if(defaultValue) setCategoria(JSON.stringify(defaultValue))
    }, [defaultValue])

    return (
        <FormControl fullWidth error={!!errors.categoria?.descricao} disabled={loading || isFetching}>
            <InputLabel>{loading || isFetching ? "Carregando..." : "Categoria"}</InputLabel>
            <Select
                label="Categoria"
                variant="outlined"
                value={categoria}
                onChange={(e:SelectChangeEvent<string>) => {
                    const value = e.target.value
                    setCategoria(value)
                    setValue("categoria", JSON.parse(value) as Cat, { shouldValidate:true })
                }}
            >
                {categorias.map((categoria) => (
                    <MenuItem key={categoria.id} value={JSON.stringify(categoria)}>
                        {categoria.descricao}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{errors.categoria?.descricao?.message}</FormHelperText>
        </FormControl>
    )
}

export default forwardRef(Categoria)