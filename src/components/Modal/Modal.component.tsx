import { useState } from 'react'
import './Modal.scss'
import type { ModalProps } from './Modal.types'
import { Button } from '../Button/Button.component'

export const Modal = ({ isOpen, product, onClose, onConfirm }: ModalProps) => {
    if (!isOpen) return null

    const [quantity, setQuantity] = useState<number>(1)

    const decrease = () => {
        const next = Math.max(1, quantity - 1)
        setQuantity(next)
    }

    const increase = () => {
        const next = quantity + 1
        setQuantity(next)
    }

    const handleBuy = () => {
        onConfirm?.(quantity)
        onClose()
    }

    const title = product?.productName ?? 'Carregando produto...'
    const photo = product?.photo ?? ''
    const price = product?.price ?? 0

    const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)

    return (
        <div className="modal-overlay" role="dialog">
            <div className="modal-content">
                <button className="modal-close" aria-label="Fechar" onClick={onClose} type='button'>
                    X
                </button>

                <div className="modal-body">
                    <div className="product-image">
                        {photo ? <img src={photo} alt={title} /> : <div className="image-skeleton" />}
                    </div>

                    <div className="product-info">
                        <h2 id="modal-title" className="title">{title}</h2>
                        <div className="price">{formattedPrice}</div>
                        <a className="more-details" href="#" onClick={(e) => e.preventDefault()}>Veja mais detalhes do produto &gt;</a>

                        <div className="actions">
                            <div className="quantity" role="group" aria-label="Quantidade">
                                <button className="decrease" onClick={decrease} aria-label="Diminuir" disabled={quantity <= 1}>−</button>
                                <span>{String(quantity).padStart(2, '0')}</span>
                                <button className="increase" onClick={increase} aria-label="Aumentar">＋</button>
                            </div>
                            <Button variant='quinary' onClick={handleBuy} type='button'>COMPRAR</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


