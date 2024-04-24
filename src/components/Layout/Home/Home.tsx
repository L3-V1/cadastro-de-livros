"use client"

import React from "react"
import Container from "@/components/Container"
import { Card } from "@/components/Card"

const Home = () => {
    return (
        <Container>
            <Card.Root className="md:w-10/12 w-full">
                <Card.Body>
                    <div className="text-3xl font-light leading-tight text-center">
                        Cadastro de Livros
                    </div>
                </Card.Body>
                <Card.Footer>
                    <div className="text-center">
                        &copy; 2024
                    </div>
                </Card.Footer>
            </Card.Root>
        </Container>
    )
}

export default Home