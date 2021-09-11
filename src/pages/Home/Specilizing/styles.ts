import styled  from "styled-components";

export const Container = styled.section`
    width: 100%;
    background-color: #784CFB;
`

export const Content = styled.section`
    max-width: 1000px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    padding: 80px 0px;
    min-height: 500px;
    align-items: center;


`

export const Title = styled.div`
    p{

    }
    h2{
        color: white;
        font-size: 2rem;
    }
`
export const Spec = styled.div`
    display: flex;
    padding: 40px 0px;
    margin-top: 30px;
    justify-content: center;

    div{
        background-color: rgba(27, 69, 17, 0.5);
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 320px;
        border-radius: 20px;
        
        img{
            width: 250px;
            height: 220px;
            border-radius: 20px;
            object-fit: cover;
        }
        h1{
            color: white;
            margin-top: 8px;
            font-size: 1.4rem;
        
        }
        p {
            font-size: 1.1rem;

            color: white;
            margin-top: 12px;
        }
    }
    div.white{
        margin: 0px 40px;
        background-color: white;
        transform: scale(1.23);
        h1{
            color: #222;
        }
        p{
            color: #222;
        }
    }
`
