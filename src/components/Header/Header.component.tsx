import './Header.scss'
import CreditCard from '@/assets/CreditCard.svg?url'
import ShieldCheck from '@/assets/ShieldCheck.svg?url'
import Truck from '@/assets/Truck.svg?url'
import Logo from '@/assets/Logotipo.svg?url'
import { InformationItem } from '../InformationItem'
import { Input } from '../Input'
import { HEADER_ACTIONS, NAVIGATION_ITEMS } from './Header.constants'

export const Header = () => {
    return (
        <header className="header">
            <div className="header-information">
                <InformationItem icon={ShieldCheck} text="Compra" textMain="100% segura" />
                <InformationItem icon={Truck} startText textMain="Frete grátis" text="acima de R$ 200" />
                <InformationItem icon={CreditCard} startText textMain="Parcele" text="suas compras" />
            </div>

            <section className="header-main">
                <div className="header-logo">
                    <img src={Logo} alt="Logo Econverse" />
                </div>

                <div className="header-search">
                    <Input variant="search" type="text" placeholder="O que você está buscando?" />
                </div>

                <div className="header-actions">
                    {HEADER_ACTIONS.map(({ icon, label, alt }) => (
                        <button key={label} className="action-button" aria-label={label}>
                            <img src={icon} alt={alt} />
                        </button>
                    ))}
                </div>
            </section>

            <nav className="header-navigation">
                <ul className="nav-list">
                    {NAVIGATION_ITEMS.map(({ text, href, className, icon, iconAlt }) => (
                        <li key={text} className={className.includes('nav-signature') ? 'nav-signature' : undefined}>
                            {icon ? (
                                <>
                                    <img src={icon} alt={iconAlt} />
                                    <span>{text}</span>
                                </>
                            ) : (
                                <a href={href} className={className}>
                                    {text}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}