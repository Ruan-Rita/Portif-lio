import styled from 'styled-components'

export const Container = styled.div`
    min-height: calc(100vh - 100px);

`
export const Title = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #000000db;
    padding: 50px 0px;
    h1{
        font-size: 40px;
        font-weight: 500;
        text-align: center;
        color: whitesmoke;
    }
    p{
        text-align: center;
        color: whitesmoke;
        display: block;
        max-width: 500px;

    }
`
export const Description = styled.div`

`