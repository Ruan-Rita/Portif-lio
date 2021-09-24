import styled  from "styled-components";

export const Container = styled.section`
    width: 100%;
    background-color: #ECEDFA;
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
        color: #222;
        font-size: 2rem;
    }
`
export const SkillsFather = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding: 40px 0px;
    margin-top: 30px;
    justify-content: center;

    >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
        margin: 10px 20px;
        padding: 30px;
        
        &:hover{
            cursor: pointer;
            background-color: #9ecbe8;
            border-radius: 30px;
        }
        p {
            text-align: center;
        }
        h1{
            color: #222;
            margin-top: 8px;
            font-size: 1.4rem;
        }
        span{
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 4px dotted purple;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: #222;

            /* font-weight: bold; */
        }
        /* .circular{
        height:100px;
        width: 100px;
        position: relative;
        transform:scale(2);
        }
        .circular .inner{
        position: absolute;
        z-index: 6;
        top: 50%;
        left: 50%;
        height: 80px;
        width: 80px;
        margin: -40px 0 0 -40px;
        background: #dde6f0;
        border-radius: 100%;
        
        } */
        /* .circular .number{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        z-index:10;
        font-size:18px;
        font-weight:500;
        color:#4158d0;
        }
        .circular .bar{
        position: absolute;
        height: 100%;
        width: 100%;
        background: #fff;
        -webkit-border-radius: 100%;
        clip: rect(0px, 100px, 100px, 50px);
        }
        .circle .bar .progress{
        position: absolute;
        height: 100%;
        width: 100%;
        -webkit-border-radius: 100%;
        clip: rect(0px, 50px, 100px, 0px);
        background: #4158d0;
        }
        .circle .left .progress{
        z-index:1;
        animation: left 4s linear both;
        }
        @keyframes left{
        100%{
            transform: rotate(180deg);
        }
        }
        .circle .right {
        transform: rotate(180deg);
        z-index:3;
        
        }
        .circle .right .progress{
        animation: right 4s linear both;
        animation-delay:4s;
        }
        @keyframes right{
        100%{
            transform: rotate(180deg);
        }
        } */
    }
    
`
