import * as yup from 'yup'

yup.setLocale({
    mixed: {
        required(params) {
            return `${params.path} é obrigatório(a).`
        },

        notType(params) {
            return `${params.path} inválido(a).`
        },

        notOneOf(params) {
            return `${params.path} inválido(a).`
        }
    },

    number: {
        positive(params) {
            return `${params.path} deve ser um número positivo.`
        },
    }
})

export const categoriaSchema = yup.object({
    id:yup.string().optional().label("ID"),
    descricao:yup.string().required().label("Descrição da categoria")
})

export const livroSchema = yup.object({
    id:yup.string().optional().label("ID"),
    isbn:yup.string().optional().label("ISBN"),
    titulo:yup.string().required().label("Título"),
    autor:yup.string().required().label("Autor"),
    ano:yup.number().optional().positive().label("Ano"),
    categoria:categoriaSchema
})

export type Categoria = yup.InferType<typeof categoriaSchema>

export type Livro = yup.InferType<typeof livroSchema>