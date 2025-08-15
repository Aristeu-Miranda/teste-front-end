import './Header.scss'
import CreditCard from '@/assets/CreditCard.svg?url'
import ShieldCheck from '@/assets/ShieldCheck.svg?url'
import Truck from '@/assets/Truck.svg?url'
import Logo from '@/assets/Logotipo.svg?url'
import { InformationItem } from '../InformationItem'

export const Header = () => {
    return (
        <header className="header">
            <div className="header-information">
                <InformationItem icon={ShieldCheck} text="Compra" textMain="100% segura" />
                <InformationItem icon={Truck} startText textMain="Frete grátis" text="acima de R$ 200" />
                <InformationItem icon={CreditCard} startText textMain="Parcele" text="suas compras" />
            </div>
            <section className="header-search">
                <img src={Logo} alt="Logo Econverse" />
            </section>
        </header>
    )
}