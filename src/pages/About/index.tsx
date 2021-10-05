import  React from 'react'
import { Container, Description, Title } from './styles'
const About : React.FC = () => {
    return (
        <Container>
            <Title>
                <h1>Ruan Rita</h1>
                <p>
                   O sucesso nasce do querer, da determinação e persistência em se 
                   chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e 
                   vence obstáculos, no mínimo fará coisas admiráveis.
                </p>
            </Title>
            <Description>

            </Description>
        </Container>
    )
}
// const RenderSquare = () => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(400, 400 );
    
//     return renderer.domElement
// }
export default About