import React from "react";
import { Circle, Container, Content, SkillsFather, Title } from "./styles";

const Skills : React.FC = () => {
    return (
        <Container>
            <Content>
                <Title>
                    <h2>
                        Minhas Habilidades
                    </h2>
                    <p></p>
                </Title>
                <SkillsFather>
                    {getSkills().map(iten => (
                        <div>
                            <div className="card">
                                <div className="box">
                                    <div className="percent">
                                        <svg>
                                            <Circle className="circle" cx="70" cy="70" r="70" 
                                                stroke={iten.colorPrimary} 
                                                first={true}
                                                progress="0" >
                                                    
                                            </Circle>
                                            <Circle cx="70" cy="70" r="70" 
                                                stroke={iten.colorSecondary} 
                                                first={false}
                                                progress={iten.progress} >
                                            </Circle>
                                        </svg>
                                        <div className="number">
                                            <h2>{iten.progress}<span>%</span></h2>
                                        </div>
                                    </div>
                                    <h2 className="text">{iten.title}</h2>
                                    <p>{iten.description}</p>
                                </div>
                            </div>
                        </div> 
                    ))}
                </SkillsFather>

            
            </Content>
        </Container>
    )
}

const getSkills = () => {
    return [
        {
            progress: "30",
            title: 'Node JS',
            description: 'Contrução de api com Javascript',
            colorPrimary: "#90b7f9",
            colorSecondary: "#5656cd"
        },
        {
            progress: "80",
            title: 'Laravel',
            description: 'Contrução de api com PHP',
            colorPrimary:  "#f7a1a1",
            colorSecondary: "#ff5959"
        },
        {
            progress: "60",
            title: 'React',
            description: 'Contrução de páginas web com javascript',
            colorPrimary: "#90b7f9",
            colorSecondary: "#5656cd"
        },
        {
            progress: "80",
            title: 'CSS/HTML/JS',
            description: 'Construção de páginas modernas',
            colorPrimary:  "#f7a1a1",
            colorSecondary: "#ff5959"
        },
        {
            progress: "30",
            title: 'Flutter',
            description: 'Construção de aplicativos nativos',
            colorPrimary: "#90b7f9",
            colorSecondary: "#5656cd"
        },
        {
            progress: "45",
            title: 'Next JS',
            description: 'Contrução de páginas web com javascript',
            colorPrimary:  "#f7a1a1",
            colorSecondary: "#ff5959"
        }
        ,
        {
            progress: "80",
            title: 'Scrum',
            description: 'Conhecimento com metodologia ágeis voltado para o scrum',
            colorPrimary: "#90b7f9",
            colorSecondary: "#5656cd"
        }
        ,
        {
            progress: "35",
            title: 'Docker',
            description: 'Orquestramento de container',
            colorPrimary:  "#f7a1a1",
            colorSecondary: "#ff5959"
        }
        ,
        {
            progress: "50",
            title: 'Designer',
            description: 'Construção de template utilizando figma',
            colorPrimary: "#90b7f9",
            colorSecondary: "#5656cd"
        }
        ,
        {
            progress: "15",
            title: 'Vue JS',
            description: 'Contrução de páginas web com javascript',
            colorPrimary:  "#f7a1a1",
            colorSecondary: "#ff5959"
        }
        
        
    ]
}

export default Skills