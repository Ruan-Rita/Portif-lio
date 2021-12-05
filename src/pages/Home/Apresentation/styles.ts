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
    flex-wrap: wrap;
    padding: 80px 0px;
    min-height: 500px;
    justify-content: space-between;
    align-items: center;

    img {
        width: 350px;
        border-radius: 50%;
        height: 360px;
        object-fit: cover;
    }
    @media (max-width: 1000px)
    {
        justify-content: space-evenly;
    }
    @media (max-width: 800px)
    {   
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            margin-top: 100px;
            width: 290px;
            height: 300px;
        }
        div {
            display: flex;
            flex-direction: column;
            align-items: center;

            p {
                text-align: center;
            }
        }
    }
`

export const Description = styled.div`
    max-width: 400px;

    h2 {
        font-size: 3rem;
        color: #222;
    }
    p {
        color: #222;
        margin-top: 10px;
        font-size: 1.7rem;

        &.bold{
            color: #5656cd;
            font-weight: 800;
        }
    }
    
    button{
        width: 200px;
        height: 60px;
        background: orange;
        font-size: 1.2rem;
        color: white;
        border-radius: 10px;
        margin-top: 30px;
        transition: all .3s;
        cursor: pointer;
        &:hover{
            transform: scale(1.1);
            filter: brightness(.92);
        }
    }
`
