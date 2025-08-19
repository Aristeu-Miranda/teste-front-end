import { Button } from "../Button"
import type { PartnersProps } from "./Partners.types"
import './Partners.scss'

export const Partners = ({ title, description }: PartnersProps) => {
    return (
        <section className="partners">
            <div>
                <h2 className="partners-title">{title}</h2>
                <p className="partners-description">{description}</p>
            </div>
            <Button variant="tertiary" children="CONFIRA" />
        </section>
    )
}