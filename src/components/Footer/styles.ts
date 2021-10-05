import styled from "styled-components";

export const Container = styled.footer`
    background: #5656cd ;
    /* position: absolute;
    bottom: 0px; */
    width: 100%;
    /* margin-top: 50px; */
    padding: 60px 0px 20px 0px;
`
export const Content= styled.div`
    width: 1000px;
    margin: 0px auto;
    padding: 0px 20px;

    .itens{
        .headerFooter{
            justify-content: center;
            display: flex;
            a{
                justify-content: center;
                display: flex;
            }
            /* align-items: center; */
            img{
                max-width: 35px;
                max-height: 30px;
                object-fit: contain;
                margin-right: 10px;
            }
            h2{
                color: #cfd9ff;
                font-size: 1.2rem;
                margin-bottom: 15px;
            }
        }
        .contentFooter{
            color: #cfd9ff;
            text-align: center;
            margin-bottom: 25px;

        }
    }
`
export const Columns = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, minmax(100px, 230px)) ;
    gap: 5px;




`
export const CopyRight= styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 2px solid rgb(146 146 255);
    margin-top: 30px;
    padding-top: 20px;

    p {
        color: #cfd9ff;
    }
`

