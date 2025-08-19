import './Input.scss'
import type { InputProps } from './Input.types'
import SearchIcon from '@/assets/Search.svg?url'

export const Input = ({ variant = 'text', placeholder, type, value, onChange }: InputProps) => {
    if (variant === 'search') {
        return (
            <div className={variant}>
                <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
                <button type="button">
                    <img src={SearchIcon} alt="Search" className="search-icon" />
                </button>
            </div>
        )
    }

    return (
        <input type={type} placeholder={placeholder} className={variant} value={value} onChange={onChange} />
    )
}