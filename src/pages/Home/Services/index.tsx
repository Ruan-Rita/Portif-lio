import React from "react";
import { Container, Content } from "./styles"

interface IService{
    stateService: boolean
}

const Service : React.FC<IService> = ({stateService}) => {
    const defineHeight = () => {
        if (stateService) return "500px"
        else return "0px"
    }
    return (
        <Container >
            <Content id="idServices" height={defineHeight()} >
                asdasd
            </Content>
        </Container>
    )
}

export default Service;