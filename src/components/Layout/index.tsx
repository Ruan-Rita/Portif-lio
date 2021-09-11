import  React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Container } from './styles'

const Layout : React.FC = (props) => {
    return (
        <Container>
            <Header />
            {props.children}
            <Footer />
        </Container>
    )
}

export default Layout