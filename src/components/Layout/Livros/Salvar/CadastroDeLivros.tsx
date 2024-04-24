import React, { useRef } from "react"
import Container from "@/components/Container"
import { Card } from "@/components/Card"
import { livroSchema } from "@/utils/schemas"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from "react-hook-form"
import useLivro from "./hooks/useLivro"
import FormLivros, { FormLivrosAttributes } from "./FormLivros"
import ToolbarLivros from "./ToolbarLivros"

const CadastroDeLivros = () => {
    const { isFetching, livro } = useLivro()

    const formRef = useRef<FormLivrosAttributes>(null)

    const methods = useForm({ resolver:yupResolver(livroSchema) })

    return (
        <Container>
            <Card.Root className="md:w-10/12 w-full">
                <Card.Header>{!!livro ? `Editar Livro - ${livro.titulo} (${livro.autor})` : "Novo Livro"}</Card.Header>
                <FormProvider {...methods}>
                    <Card.Body>
                        <FormLivros
                            ref={formRef}
                            livro={livro}
                            isFetching={isFetching}
                        />
                    </Card.Body>
                    <Card.Footer>
                        <ToolbarLivros formRef={formRef} />
                    </Card.Footer>
                </FormProvider>
            </Card.Root>
        </Container>
    )
}

export default CadastroDeLivros