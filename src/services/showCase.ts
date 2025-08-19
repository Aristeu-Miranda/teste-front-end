import type { Product, ShowcaseApiResponse } from "./showCase.types"

const PROXY_PATH = '/econverse/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

const SHOWCASE_URL = PROXY_PATH

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

export async function fetchProductById(productId: string): Promise<Product> {
    const allProducts = await fetchShowcaseProducts()

    const normalizedId = decodeURIComponent(productId)

    const index = Number.isNaN(Number(normalizedId)) ? -1 : Number(normalizedId)
    const foundByIndex = index >= 0 && index < allProducts.length ? allProducts[index] : undefined
    if (foundByIndex) return { ...foundByIndex, id: String(index) }

    throw new Error("Produto não encontrado")
}


