import styled from "styled-components";

export const Container = styled.div`
    background-color: red;
    
`

interface IContent{
    height: string
}
export const Content = styled.div<IContent>`
    width: 1000px;
    margin: 0px auto;
    transition: all .5s;
    height: ${props => props.height};
    background-color: white;
    overflow: hidden;
`