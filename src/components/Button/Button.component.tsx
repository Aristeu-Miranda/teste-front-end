import './Button.scss'
import type { ButtonProps } from './Button.types'

export const Button = ({ variant, children, onClick }: ButtonProps) => {
    return (
        <button className={variant} onClick={onClick}>
            {children}
        </button>
    )
}