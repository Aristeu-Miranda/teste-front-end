import { useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import './Footer.scss'
import Logo from '@/assets/Logotipo.svg?url'
import FacebookIcon from '@/assets/facebook.svg?url'
import InstagramIcon from '@/assets/instagram.svg?url'
import LinkedinIcon from '@/assets/linkedin.svg?url'

export const Footer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const resetForm = () => {
        setName('')
        setEmail('')
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        resetForm()
    }

    return (
        <footer>
            <section className="newsletter-container">
                <div className="newsletter-content">
                    <h2 className="newsletter-title">{`Inscreva-se na nossa newsletter`}</h2>
                    <p className="newsletter-description">{`Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.`}</p>
                </div>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <div className="newsletter-row">
                        <Input placeholder="Digite seu nome" variant="text" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <Input placeholder="Digite seu e-mail" variant="text" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Button variant='quaternary' type='submit'>INSCREVER</Button>
                    </div>
                    <div className="newsletter-checkbox">
                        <input type="checkbox" id="newsletter-checkbox" />
                        <label htmlFor="newsletter-checkbox">
                            <span>Aceito os termos e condições</span>
                        </label>
                    </div>
                </form>
            </section>
            <section className="social-media-container">
                <div className="social-media">
                    <div className="social-left">
                        <img src={Logo} alt="Econverse" className="logo" />
                        <p className="brand-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook">
                                <img src={FacebookIcon} alt="Facebook" />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <img src={InstagramIcon} alt="Instagram" />
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <img src={LinkedinIcon} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    <nav className="social-right" aria-label="Links de rodapé">
                        <div className="footer-column">
                            <h3>Institucional</h3>
                            <ul>
                                <li><a href="#">Sobre Nós</a></li>
                                <li><a href="#">Movimento</a></li>
                                <li><a href="#">Trabalhe conosco</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Ajuda</h3>
                            <ul>
                                <li><a href="#">Suporte</a></li>
                                <li><a href="#">Fale Conosco</a></li>
                                <li><a href="#">Perguntas Frequentes</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3>Termos</h3>
                            <ul>
                                <li><a href="#">Termos e Condições</a></li>
                                <li><a href="#">Política de Privacidade</a></li>
                                <li><a href="#">Troca e Devolução</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
        </footer>
    )
}