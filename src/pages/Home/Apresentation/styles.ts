import styled  from "styled-components";

export const Container = styled.section`
    width: 100%;
    background-image: url('${process.env.PUBLIC_URL}/assets/images/background.png');
    /* background: #ECEDFA; */
`

export const Content = styled.section`
    max-width: 1000px;
    margin: 0px auto;
    display: flex;
    padding: 80px 0px;
    min-height: 500px;
    justify-content: space-between;
    align-items: center;

    img {
        width: 400px;
        border-radius: 50%;
        height: 370px;
        object-fit: cover;
    }
`

export const Description = styled.div`
    margin-right: 200px;

    h2 {
        font-size: 3rem;
    }
    p {
        margin-top: 10px;
        font-size: 1.7rem;
    }
    button{
        width: 200px;
        height: 60px;
        background: orange;
        font-size: 1.2rem;
        color: white;
        border-radius: 10px;
        margin-top: 30px;
    }
`