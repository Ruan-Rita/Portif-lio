import styled from "styled-components";

export const Headers = styled.header`
    height: 80px ;
    background: #ECEDFA;
    border-bottom: 1px solid white;
`
export const Container = styled.div`
    max-width: 1000px;
    margin: 0px auto;
    display: flex;
    height: inherit;
    align-items: center;
    justify-content: space-between;
    div{
        color: #784CFB;
        font-size: 2rem ;
        user-select: none;
        text-shadow: 1px 1px 2px #784C7B;
        transition: all .2s ease-in;
        &:hover{
            transform: scale(1.1);
        }
    }
    ul {
        height: 100%;
        display: flex;
        list-style: none;

        /* background-color: blue; */
        li {
            display: flex;
            align-items: center;
            margin: 0px 10px;
            color: #1E1E1E;
            font-size: 1.2rem;
            /* background-color: red; */
            user-select: none;
            
        }
    }
`