import  React from 'react'
import Apresentation from './Apresentation'
import Skills from './Skills'
import Specilizing from './Specilizing'
import { Container } from './styles'

const Home : React.FC = () => {
    return (
        <Container>
            <Apresentation />
            <Specilizing />
            <Skills />

        </Container>
    )
}

export default Home