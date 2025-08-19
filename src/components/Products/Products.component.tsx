import { useState } from "react";
import { Category } from "../Category";
import { MAIN_CATEGORIES, PRODUCT_CATEGORIES } from "./Products.constants";
import './Products.scss'
import { useShowcaseProducts } from "@/services/showCase.hook";
import { Carousel } from "../Carousel";

export const Products = () => {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(MAIN_CATEGORIES[0].category);
    const [selectedProduct, setSelectedProduct] = useState<string>(PRODUCT_CATEGORIES[0]);
    const { products, isLoading, error } = useShowcaseProducts();

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

        </main>
    );
};