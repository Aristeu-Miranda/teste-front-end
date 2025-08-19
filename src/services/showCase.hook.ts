import { useEffect, useState } from "react"
import { fetchShowcaseProducts } from "./showCase"
import type { Product } from "./showCase.types"

export function useShowcaseProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        setIsLoading(true)
        setError(null)

        fetchShowcaseProducts()
            .then(setProducts)
            .catch((err: unknown) => {
                setError(err instanceof Error ? err : new Error("Erro desconhecido"))
            })
            .finally(() => setIsLoading(false))
    }, [])

    return { products, isLoading, error }
}