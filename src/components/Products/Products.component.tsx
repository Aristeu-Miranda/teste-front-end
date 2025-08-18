import { useState } from "react";
import { Category } from "../Category";
import { MAIN_CATEGORIES } from "./Products.constants";
import './Products.scss'

export const Products = () => {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(MAIN_CATEGORIES[0].category);

    return (
        <main>
            <nav className="categories-container">
                <div className="categories-list">
                    {MAIN_CATEGORIES.map(({ category, categoryLogo }) => (
                        <Category key={category} category={category} categoryLogo={categoryLogo} isSelected={selectedCategory === category} onClick={() => setSelectedCategory(category)} />
                    ))}
                </div>
            </nav>

        </main>
    );
};