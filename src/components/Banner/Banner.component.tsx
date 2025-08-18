import { Button } from "../Button"
import './Banner.scss'

export const Banner = () => {
    return (
        <section className="banner">
            <div className="banner-content">
                <h1>
                    {`Venha conhecer nossas promoções`}
                </h1>
                <h2>
                    <span>
                        {`50% off `}
                    </span>
                    {`nos produtos`}
                </h2>
            </div>
            <div>
                <Button variant="primary" children={`Ver produto`} />
            </div>
        </section>
    )
}
