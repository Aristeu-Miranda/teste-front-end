import type { Product, ShowcaseApiResponse } from "./showCase.types"

const PROXY_PATH = import.meta.env.VITE_API_PROXY_PATH
const DIRECT_URL = import.meta.env.VITE_API_DIRECT_URL
const SHOWCASE_URL = import.meta.env.DEV ? PROXY_PATH : DIRECT_URL

export async function fetchShowcaseProducts(): Promise<Product[]> {
    const response = await fetch(SHOWCASE_URL, {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })

    if (!response.ok) {
        throw new Error("Falha ao carregar produtos")
    }

    const data = (await response.json()) as ShowcaseApiResponse

    if (!data || !Array.isArray(data.products)) {
        throw new Error("Resposta inválida da vitrine")
    }

    return data.products
}


