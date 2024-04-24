import { Livro } from "@/utils/schemas";

export async function getLivros(apiUrl:string): Promise<Livro[]> {
    try {
        const resp = await fetch(`${apiUrl}/livros`)
        const data = await resp.json()

        if(resp.status == 200){
            return data as Livro[]
        } else {
            return []
        }
    } catch(err:unknown) {
        throw `Erro durante requisição: ${err}`
    }
}

export async function getLivroById(apiUrl:string, dataId:string): Promise<Livro | undefined> {
    try {
        const resp = await fetch(`${apiUrl}/livros/${dataId}`)
        const data = await resp.json()

        if(resp.status == 200){
            return data as Livro
        } else {
            return undefined
        }
    } catch(err:unknown) {
        throw `Erro durante requisição: ${err}`
    }
}

export async function saveLivro(apiUrl:string, formData:Livro): Promise<Livro | undefined> {
    try {
        const editMode = "id" in formData
        const restUrl  = editMode ? `livros/${formData.id}` : "livros"
        const options = {
            method:editMode ? 'PUT' : 'POST',
            body:JSON.stringify(formData),
            headers: {
                'Content-type':'application/json'
            }
        }

        const resp = await fetch(`${apiUrl}/${restUrl}`, options)
        const data = await resp.json()

        if(resp.status == 200 || resp.status == 201){
            return data as Livro
        } else {
            return undefined
        }
    } catch(err:unknown) {
        throw `Erro durante requisição: ${err}`
    }
}

export async function deleteLivro(apiUrl:string, dataId:string): Promise<Livro | undefined> {
    try {
        const options = { method:'DELETE' }
        const resp = await fetch(`${apiUrl}/livros/${dataId}`, options)
        const data = await resp.json()

        if(resp.status == 200){
            return data as Livro
        } else {
            return undefined
        }
    } catch(err:unknown) {
        throw `Erro durante requisição: ${err}`
    }
}