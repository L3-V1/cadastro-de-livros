import React from "react"
import useLivros from "./hooks/useLivros"
import Container from "@/components/Container"
import { Card } from "@/components/Card"
import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid"
import { Livro } from "@/utils/schemas"
import Link from "next/link"
import Spinner from "@/components/Spinner"

const ListagemDeLivros = () => {
    const { loading, livros } = useLivros()

    const columns:GridColDef<Livro>[] = [
        {
            field:"id",
            headerName:"ID",
            align:"center",
            headerAlign:"center",
            minWidth:150,
            flex:1
        },
        {
            field:"isbn",
            headerName:"ISBN",
            align:"center",
            headerAlign:"center",
            minWidth:150,
            flex:1
        },
        {
            field:"titulo",
            headerName:"Título",
            align:"center",
            headerAlign:"center",
            minWidth:150,
            flex:1,
            renderCell(params) {
                return (
                    <Link href={`salvar/${params.row.id}`}>
                        <span className="text-blue-400 underline underline-offset-2">{params.row.titulo}</span>
                    </Link>
                )
            },
        },
        {
            field:"autor",
            headerName:"Autor",
            align:"center",
            headerAlign:"center",
            minWidth:150,
            flex:1
        },
        {
            field:"ano",
            headerName:"Ano",
            align:"center",
            headerAlign:"center",
            minWidth:150,
            flex:1
        },
        {
            field:"categoria",
            headerName:"Categoria",
            align:"center",
            headerAlign:"center",
            minWidth:150,
            flex:1,
            valueGetter(params) {
                return params.row.categoria.descricao
            },
        }
    ]

    if(loading) return <Spinner />
    
    return (
        <Container>
            <Card.Root className="md:w-10/12 w-full">
                <Card.Header>Listagem de Livros</Card.Header>
                <Card.Body>
                    <DataGrid
                        rows={livros}
                        columns={columns}
                        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                        initialState={{
                            columns: {
                                columnVisibilityModel: {
                                    id:false
                                }
                            },
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            }
                        }}
                        pageSizeOptions={[5, 10]}
                    />
                </Card.Body>
            </Card.Root>
        </Container>
    )
}

export default ListagemDeLivros