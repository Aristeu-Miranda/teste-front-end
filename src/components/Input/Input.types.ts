import type { HTMLInputTypeAttribute } from "react"

export type InputProps = {
    placeholder: string
    variant: 'search' | 'text'
    type: HTMLInputTypeAttribute
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}