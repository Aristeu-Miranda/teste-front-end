import { useState } from "react";
import { Category } from "../Category";
import { BRANDS, MAIN_CATEGORIES, PRODUCT_CATEGORIES } from "./Products.constants";
import './Products.scss'
import { useShowcaseProducts } from "@/services/showCase.hook";
import { Carousel } from "../Carousel";
import { Partners } from "../Partners";
import { Brands } from "../Brands";

export const Products = () => {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(MAIN_CATEGORIES[0].category);
    const [selectedProduct, setSelectedProduct] = useState<string>(PRODUCT_CATEGORIES[0]);
    const { products, isLoading, error } = useShowcaseProducts();

    const [viewAllProducts, setViewAllProducts] = useState(false);

    return (
        <main>
            <nav className="categories-container">
                <div className="categories-list">
                    {MAIN_CATEGORIES.map(({ category, categoryLogo }) => (
                        <Category key={category} category={category} categoryLogo={categoryLogo} isSelected={selectedCategory === category} onClick={() => setSelectedCategory(category)} />
                    ))}
                </div>
            </nav>
            <section className="products-list">
                <div className="products-header">
                    <div className="decorative-line"></div>
                    <h2 className="products-title">Produtos relacionados</h2>
                    <div className="decorative-line"></div>
                </div>
                <nav className="category-nav">
                    {PRODUCT_CATEGORIES.map((category) => (
                        <div
                            key={category}
                            className={`category-item ${selectedProduct === category ? 'active' : ''}`}
                            onClick={() => setSelectedProduct(category)}
                        >
                            <span>{category}</span>
                        </div>
                    ))}
                </nav>
            </section>
            <section>
                <Carousel products={products} isLoading={isLoading} error={error} />
            </section>
            <section className="partners-container">
                <Partners title="Parceiros" description="Conheça nossos parceiros" />
                <Partners title="Parceiros" description="Conheça nossos parceiros" />
            </section>
            <div className="products-header">
                <div className="decorative-line"></div>
                <h2 className="products-title">Produtos relacionados</h2>
                <div className="decorative-line"></div>
            </div>
            <div className="products-footer">
                <span onClick={() => setViewAllProducts(!viewAllProducts)}>Ver todos</span>
            </div>
            <section>
                <Carousel products={products} isLoading={isLoading} error={error} viewAll={viewAllProducts} />
            </section>
            <section className="partners-container">
                <Partners title="Parceiros" description="Conheça nossos parceiros" />
                <Partners title="Parceiros" description="Conheça nossos parceiros" />
            </section>
            <div className="products-header">
                <h2 className="products-title">Navegue por marcas</h2>
            </div>
            <div className="brands-container">
                {BRANDS.map(({ brandName, logo }) => (
                    <Brands key={brandName} brandName={brandName} logo={logo} />
                ))}
            </div>
            <div className="products-header">
                <div className="decorative-line"></div>
                <h2 className="products-title">Produtos relacionados</h2>
                <div className="decorative-line"></div>
            </div>
            <div className="products-footer">
                <span onClick={() => setViewAllProducts(!viewAllProducts)}>Ver todos</span>
            </div>
            <section>
                <Carousel products={products} isLoading={isLoading} error={error} viewAll={viewAllProducts} />
            </section>
        </main>
    );
};