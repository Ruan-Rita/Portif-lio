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
                    <li>Meus Talentos </li>
                    <li>Sobre</li>
                </ul>
            </Container>
        </Headers>
    )
}

export default Header