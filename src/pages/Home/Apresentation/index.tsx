import React from "react";
import { Container, Content, Description } from './styles'

const Apresentation : React.FC = () => {
    return (
        <Container>
            <Content>
                <Description>
                    <h2>Ruan Rita</h2>
                    <p>Eu sou Progrador FullStack, tenho me curtido essa vida louca</p>
                    <button>Saiba mais</button>
                </Description>
                <img src={process.env.PUBLIC_URL + "/assets/images/ruan.png"} alt="Ruan" />
            </Content>


            
        </Container>
    )
}

export default Apresentation