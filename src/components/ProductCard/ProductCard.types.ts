import type { Product } from "@/services"

export type ProductCardProps = {
    product: Product
    isLoading: boolean
    error: Error | null
}