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
        color: #5656cd;
        font-size: 2.3rem;
    }
`
export const SkillsFather = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding: 40px 0px;
    margin-top: 20px;
    justify-content: center;

    >div{
        > div.card{
            width: 170px;
            margin: 20px;
            div.box{
                div.percent{
                    position: relative;
                    width: 100%;

                    height: 170px;
                    
                    border-radius: 50%;
                    z-index: 1000;

                    svg{
                        position: relative;
                        width: inherit;
                        height: inherit;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 999;
                        .circle{
                            
                            &:nth-child(2){
                                box-shadow:inset 0 0 50px #000;

                                stroke: #5656cd;
                                stroke-dasharray: 440;
                                stroke-dashoffset: calc(440 - (440 * 80) / 100) ;
                            }

                        }
                        
                    }
                    div.number{
                        width: inherit;
                        height: inherit;
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;
                        h2{
                            color: #5656cd;
                            text-align: center;
                            font-size: 40px;
                            span{
                                font-size: 20px;

                            }
                        }
                    }
                }
                > h2{
                    text-align: center;
                    position: relative;
                    color: #777;
                    margin-top: 20px;
                    text-transform: uppercase;
                }
                p{
                    text-align: center;
                }
            }
        }
    }   
`
interface ICircle{
    progress: string,
    stroke: string,
    first: boolean
}
export const Circle = styled.circle<ICircle>`
    width: inherit;
    height: inherit;
    fill: none;
    stroke-width: 14;
    stroke-linecap: round;
    transform: translate(15px, 15px);

    stroke: ${props => props.stroke};
    ${props => !props.first && `
        stroke-dasharray: 440;
        stroke-dashoffset: calc(440 - (440 * ${props.progress}) / 100) ;
    `}
`
