import React from "react";
import { Container, Content, Description } from './styles'

interface IApresentation{
    onClikcShowMore: (event : React.MouseEvent<HTMLButtonElement>) => void
}
const Apresentation : React.FC<IApresentation> = ({onClikcShowMore}) => {
    return (
        <Container>
            <Content>
                <Description>
                    <h2>Ruan Rita</h2>
                    <p>Eu sou Programador FullStack apaixonado por tecnologia, sempre buscando novos desafios !</p>
                    <p className="bold">Sou feliz Desenvolvendo seu Site</p>
                    <button onClick={onClikcShowMore}>Saiba mais</button>
                </Description>
                <img src={process.env.PUBLIC_URL + "/assets/images/ruan.png"} alt="Ruan" />
            </Content>


            
        </Container>
    )
}

export default Apresentation