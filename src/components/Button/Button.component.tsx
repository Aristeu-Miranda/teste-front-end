import './Button.scss'
import type { ButtonProps } from './Button.types'

export const Button = ({ variant, children, onClick, type }: ButtonProps) => {
    return (
        <button className={variant} onClick={onClick} type={type}>
            {children}
        </button>
    )
}