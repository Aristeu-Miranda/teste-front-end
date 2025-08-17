import Group from '@/assets/Group.svg?url'
import Heart from '@/assets/Heart.svg?url'
import UserCircle from '@/assets/UserCircle.svg?url'
import ShoppingCart from '@/assets/ShoppingCart.svg?url'
import Crown from '@/assets/CrownSimple.svg?url'
import type { HeaderAction, NavigationItem } from './Header.types'


export const HEADER_ACTIONS: readonly HeaderAction[] = [
    { icon: Group, label: 'Grupo', alt: 'Grupo' },
    { icon: Heart, label: 'Favoritos', alt: 'Favoritos' },
    { icon: UserCircle, label: 'Minha conta', alt: 'Minha conta' },
    { icon: ShoppingCart, label: 'Carrinho', alt: 'Carrinho' }
] as const

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
    { text: 'TODAS CATEGORIAS', href: '#', className: 'nav-link' },
    { text: 'SUPERMERCADO', href: '#', className: 'nav-link' },
    { text: 'LIVROS', href: '#', className: 'nav-link' },
    { text: 'MODA', href: '#', className: 'nav-link' },
    { text: 'LANÇAMENTOS', href: '#', className: 'nav-link' },
    { text: 'OFERTAS DO DIA', href: '#', className: 'nav-link nav-link--highlight' },
    {
        text: 'ASSINATURA',
        href: '#',
        className: 'nav-signature',
        icon: Crown,
        iconAlt: 'Coroa'
    }
] as const
