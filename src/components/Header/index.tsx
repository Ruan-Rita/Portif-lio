import React from 'react'
import { Container, Headers } from './styles'
const Header: React.FC = () => {
    return(
        <Headers>
            <Container>
                <div>
                    Devel
                    <span></span>
                </div>
                <ul>
                    <li><a href="/meus-talentos#skills">Habilidades</a> </li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </Container>
        </Headers>
    )
}

export default Header