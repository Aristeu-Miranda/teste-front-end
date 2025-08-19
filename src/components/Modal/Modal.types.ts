import type { Product } from "@/services"

export type ModalProps = {
    isOpen: boolean
    product: Product | null
    onClose: () => void
    onConfirm?: (quantity: number) => void
}


