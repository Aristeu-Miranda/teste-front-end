export type ButtonProps = {
    variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary'
    children: React.ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
}