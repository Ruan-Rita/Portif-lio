import styled from "styled-components";

export const Container = styled.footer`
    background: #271663 ;
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
            display: flex;
            /* align-items: center; */
            img{
                max-width: 35px;
                max-height: 30px;
                object-fit: contain;
                margin-right: 10px;
            }
            h2{
                color: white;
                font-size: 1.2rem;
                margin-bottom: 40px;
            }
        }
        .contentFooter{
            color: white;
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
    border-top: 1px solid purple;
    margin-top: 30px;
    padding-top: 20px;

    p {
        color: white;
    }
`

