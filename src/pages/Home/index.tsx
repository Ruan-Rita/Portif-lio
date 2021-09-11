import  React from 'react'
import Apresentation from './Apresentation'
import Specilizing from './Specilizing'
import { Container } from './styles'

const Home : React.FC = () => {
    return (
        <Container>
            <Apresentation />
            <Specilizing />


        </Container>
    )
}

export default Home