import './InformationItem.scss'
import type { InformationItemProps } from './InformationItem.types'

export const InformationItem = ({ icon, text, textMain, startText = false }: InformationItemProps) => {
    return (
        <div className="information-item">
            <img src={icon} alt={text} />
            <p>
                {startText ? (
                    <>
                        <span>{textMain}</span> {text}
                    </>
                ) : (
                    <>
                        {text} <span>{textMain}</span>
                    </>
                )}
            </p>
        </div>
    )
}