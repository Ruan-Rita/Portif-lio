import styled from "styled-components";

export const Container = styled.footer`
    background: #3d403d ;
    /* position: absolute;
    bottom: 0px; */
    width: 100%;
    /* margin-top: 50px; */
    padding: 60px 0px 20px 0px;
`
export const Content= styled.div`
    max-width: 1000px;
    margin: 0px auto;
    padding: 0px 20px;

    .itens{
        .headerFooter{
            justify-content: start;
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            transition: all .3s;
    
            &:hover{
                transform: scale(1.1);
                .spin{
                    animation-duration: 3500ms;
                }
            }
            .spin{
                transition: all .3s;
                
                animation-name: spin;
                animation-duration: 5000ms;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
            }
            @keyframes spin {
                from {
                    transform:rotate(0deg);
                }
                to {
                    transform:rotate(360deg);
                }
            }
            svg{
                margin-right: 10px;
                color: #b7b7b7;
                font-size: 2rem;
            }
            a{
                display: flex;
                justify-content: start;
                align-items: center;
            }
            /* align-items: center; */
            img{
                margin-right: 10px;
                max-width: 35px;
                max-height: 30px;
                object-fit: contain;
                margin-right: 10px;
            }
            h2{
                color: #b7b7b7;
                font-size: 1.2rem;
            }
        }
        .contentFooter{
            color: #cfd9ff;
            text-align: start;
            margin-bottom: 25px;
            
            a {
                margin-top: 5px;
                margin-right: 5px;
                color: #cfd9ff;
                text-decoration: none;
                svg{
                    margin-right: 10px;
                    font-size: 2.1rem;
                    color: #b3b3b3;

                    transition: all .3s;

                    &:hover{
                        filter: opacity(.7);
                        transform: scale(1.1) translate(12%,0%);
                    }
                }
                /* &:nth-child(1) svg{
                    color: #4bed68;
                }
                &:nth-child(2) svg{
                    color: #dddddd;
                }
                &:nth-child(3) svg{
                    color: #24292f;
                } */
            }
        }
    }
`
export const Columns = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, minmax(100px, 230px)) ;
    gap: 5px;

    @media (max-width: 950px)
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        /* align-items: center; */
        div{
            margin: 10px;
        }

    }
    @media (max-width: 420px)
    {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        /* align-items: center; */
        div{
            margin: 10px;
        }

    }


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

