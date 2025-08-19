import type { BrandsProps } from "./Brands.types"
import './Brands.scss'

export const Brands = ({ brandName, logo }: BrandsProps) => {
    return (
        <div className="brand-content">
            <a href="#">
                <img src={logo} alt={`${brandName} logo`} />
            </a>
        </div>
    )
}