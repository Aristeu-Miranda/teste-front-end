import { useMemo, useState } from 'react'
import './Carousel.scss'
import type { CarouselProps } from './Carousel.types'
import { ProductCard } from '../ProductCard'

export const Carousel = ({ products, isLoading, error, itemsPerView = 4, step = 1, viewAll = false, onBuy }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const canSlideLeft = currentIndex > 0
    const canSlideRight = currentIndex < Math.max(0, products.length - itemsPerView)

    const visibleProducts = useMemo(() => {
        if (isLoading) return []
        return viewAll ? products : products.slice(currentIndex, currentIndex + itemsPerView)
    }, [products, currentIndex, itemsPerView, isLoading, viewAll])

    const handlePrev = () => {
        if (!canSlideLeft) return
        setCurrentIndex((prev) => Math.max(0, prev - step))
    }

    const handleNext = () => {
        if (!canSlideRight) return
        setCurrentIndex((prev) => Math.min(products.length - itemsPerView, prev + step))
    }

    const placeholderProduct = {
        productName: '',
        descriptionShort: '',
        photo: '',
        price: 0,
    }

    if (error) {
        return (
            <div className="carousel error">
                <p>Não foi possível carregar os produtos.</p>
            </div>
        )
    }

    if (viewAll) {
        return (
            <div className="carousel view-all">
                <div className="products-grid">
                    {isLoading
                        ? Array.from({ length: itemsPerView }).map((_, index) => (
                            <div className="item" key={`skeleton-${index}`}>
                                <ProductCard product={placeholderProduct} isLoading={true} error={null} onBuy={() => { }} />
                            </div>
                        ))
                        : visibleProducts.map((product, index) => (
                            <div className="item" key={`${product.productName}-${index}`}>
                                <ProductCard product={product} isLoading={false} error={null} onBuy={() => onBuy?.(index)} />
                            </div>
                        ))}
                </div>
            </div>
        )
    }

    return (
        <div className="carousel">
            <button className={`nav prev ${canSlideLeft ? '' : 'disabled'}`} onClick={handlePrev} aria-label="Anterior" disabled={!canSlideLeft}>
                ‹
            </button>

            <div className="viewport">
                <div className="track">
                    {isLoading
                        ? Array.from({ length: itemsPerView }).map((_, index) => (
                            <div className="item" key={`skeleton-${index}`}>
                                <ProductCard product={placeholderProduct} isLoading={true} error={null} onBuy={() => { }} />
                            </div>
                        ))
                        : visibleProducts.map((product, index) => (
                            <div className="item" key={`${product.productName}-${index}`}>
                                <ProductCard product={product} isLoading={false} error={null} onBuy={() => onBuy?.(index)} />
                            </div>
                        ))}
                </div>
            </div>

            <button className={`nav next ${canSlideRight ? '' : 'disabled'}`} onClick={handleNext} aria-label="Próximo" disabled={!canSlideRight}>
                ›
            </button>
        </div>
    )
}


