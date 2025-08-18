import type { CategoryProps } from "./Category.types";
import "./Category.scss";

export const Category = ({ category, categoryLogo, isSelected, onClick }: CategoryProps) => {
    return (
        <div className={`category-container ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            <div className="category-icon">
                <img src={categoryLogo} alt={category} />
            </div>
            <span className="category-text">{category}</span>
        </div>
    )
};