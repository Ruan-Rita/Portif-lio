import React from "react";
import { Container, Content, Spec, Title } from './styles'

const Specilizing : React.FC = () => {
    return (
        <Container>
            <Content>
                <Title>
                    <h2>
                        Minha Especilização
                    </h2>
                    <p></p>
                </Title>
                <Spec>
                    {getSpecilization().map((iten, index) => (
                        <div key={index} className={index == 1 ? "white": "" }>
                            <img src={process.env.PUBLIC_URL+"/assets/images/"+iten.src} alt=""/>
                            <h1>{iten.title}</h1>
                            <p>{iten.description}</p>
                            
                        </div>
                    ))}
                </Spec>

            
            </Content>
        </Container>
    )
}

const getSpecilization = () => {
    return [
        {
            src :'app.png',
            title: 'App Development',
            description: 'Construção de aplicativos nativos e hibridos'
        },
        {
            src :'website.png',
            title: 'WebSite Development',
            description: 'Construção de aplicativos nativos e hibridos'
        },
        {
            src :'analista.png',
            title: 'Analista de Sistema',
            description: 'Construção de aplicativos nativos e hibridos'
        }
    ]
}

export default Specilizing