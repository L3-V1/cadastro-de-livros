import { Categoria } from "@/utils/schemas"

export async function getCategorias(apiUrl:string): Promise<Categoria[]> {
    try {
        const resp = await fetch(`${apiUrl}/categorias`)
        const data = await resp.json()

        if(resp.status == 200){
            return data as Categoria[]
        } else {
            return []
        }
    } catch(err:unknown) {
        throw `Erro durante requisição: ${err}`
    }
}