import React, { RefObject } from "react"
import { LoadingButton } from "@mui/lab"
import { Button, Grid } from "@mui/material"
import useSaveLivro from "./hooks/useSaveLivro"
import { useFormContext } from "react-hook-form"
import { Livro } from "@/utils/schemas"
import { FormLivrosAttributes } from "./FormLivros"
import { useData } from "@/contexts/DataContext"
import SaveIcon from '@mui/icons-material/Save'
import ClearIcon from '@mui/icons-material/Clear'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import useDeleteLivro from "./hooks/useDeleteLivro"

const ToolbarLivros = ({ formRef }: { formRef:RefObject<FormLivrosAttributes> }) => {
    const { dataId } = useData()

    const { handleSubmit } = useFormContext<Livro>()

    const { isSaving, handleSave } = useSaveLivro()

    const { isDeleting, handleDelete } = useDeleteLivro()

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={5} lg={3}>
                <LoadingButton
                    fullWidth
                    loadingPosition="start"
                    loading={isSaving}
                    className="bg-blue-500"
                    variant="contained"
                    color="info"
                    size="large"
                    startIcon={<SaveIcon />}
                    onClick={handleSubmit(handleSave)}
                >
                    Salvar
                </LoadingButton>
            </Grid>

            <Grid item xs={12} md={5} lg={3}>
                <Button
                    fullWidth
                    variant="outlined"
                    color="secondary"
                    size="large"
                    startIcon={<ClearIcon />}
                    onClick={() => formRef.current?.clearFields()}
                >
                    Limpar
                </Button>
            </Grid>

            {
                !!dataId &&
                <Grid item xs={12} md={5} lg={3}>
                    <LoadingButton
                        fullWidth
                        loadingPosition="start"
                        loading={isDeleting}
                        variant="outlined"
                        color="error"
                        size="large"
                        startIcon={<DeleteForeverIcon />}
                        onClick={(e) => handleDelete(dataId)}
                    >
                        Excluir
                    </LoadingButton>
                </Grid>
            }
        </Grid>
    )
}

export default ToolbarLivros