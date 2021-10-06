import  React, { useState } from 'react'
import Apresentation from './Apresentation'
import Service from './Services'
import Skills from './Skills'
import Specilizing from './Specilizing'
import { Container } from './styles'

const Home : React.FC = () => {
    const [showService, setShowService ] = useState(false)
    const handleChangeService = () =>{
        setShowService(showService === true ? false:true);
        console.log("Deu Certo");
        // if(showService === true){
        //     window.location.href = "#idServices"
        // }else{
        //     window.location.href = window.location.href.replace("#idServices", "")
        // }
        
    }
    return (
        <Container>
            <Apresentation onClikcShowMore={handleChangeService} />
            <Service stateService={showService}/>
            <Specilizing />
            <Skills />

        </Container>
    )
}

export default Home