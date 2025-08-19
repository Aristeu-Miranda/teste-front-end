import './ProductCard.scss'
import type { ProductCardProps } from './ProductCard.types'
import { Button } from '../Button'

const formatCurrencyBRL = (value: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

export const ProductCard = ({ product, isLoading, error, onBuy }: ProductCardProps) => {
    if (isLoading) {
        return (
            <article className="product-card loading">
                <div className="image skeleton" />
                <div className="text-line skeleton" />
                <div className="text-line skeleton short" />
                <div className="price-row">
                    <span className="old-price skeleton text" />
                </div>
                <div className="price skeleton text" />
                <div className="installments skeleton text" />
                <div className="shipping skeleton text" />
                <div className="cta">
                    <div className="button-skeleton skeleton" />
                </div>
            </article>
        )
    }

    if (error) {
        return (
            <article className="product-card error">
                <p>Não foi possível carregar o produto.</p>
            </article>
        )
    }

    const { productName, descriptionShort, photo, price } = product
    const oldPrice = price * 1.07
    const installments = 2
    const installmentPrice = price / installments

    return (
        <article className="product-card">
            <div className="image">
                <img src={photo} alt={productName} />
            </div>

            <p className="description">{descriptionShort}</p>

            <span className="old-price">{formatCurrencyBRL(oldPrice)}</span>
            <div className="price">{formatCurrencyBRL(price)}</div>

            <p className="installments">
                {`ou ${installments}x de ${formatCurrencyBRL(installmentPrice)} sem juros`}
            </p>

            <a className="shipping" href="#" onClick={(e) => e.preventDefault()}>
                Frete grátis
            </a>

            <div className="cta">
                <Button
                    variant="secondary"
                    onClick={() => {
                        onBuy?.()
                    }}
                >
                    COMPRAR
                </Button>
            </div>
        </article>
    )
}