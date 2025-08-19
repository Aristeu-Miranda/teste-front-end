import type { Product } from '@/services'

export type CarouselProps = {
    products: Product[]
    isLoading: boolean
    error: Error | null
    itemsPerView?: number
    step?: number
}


