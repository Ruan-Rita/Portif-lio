import React from "react";
import { Container, Content, SkillsFather, Title } from "./styles";

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
                           {/* <div className="circular">
                                <div className="inner"></div>
                                <div className="number">10%</div>
                                <div className="circle">
                                <div className="bar left">
                                    <div className="progress"></div>
                                </div>
                                <div className="bar right">
                                    <div className="progress"></div>
                                </div>
                                </div>
                            </div> */}
                            <span>
                                {iten.progress}
                            </span>
                            <h1>{iten.title}</h1>
                            <p>{iten.description}</p>
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
            description: 'Contrução de api com Javascript'
        },
        {
            progress: "80",
            title: 'Laravel',
            description: 'Contrução de api com PHP'
        },
        {
            progress: "60",
            title: 'React',
            description: 'Contrução de páginas web com javascript'
        },
        {
            progress: "80",
            title: 'CSS/HTML/JS',
            description: 'Construção de páginas modernas'
        },
        {
            progress: "30",
            title: 'Flutter',
            description: 'Construção de aplicativos nativos'
        },
        {
            progress: "45",
            title: 'Next JS',
            description: 'Contrução de páginas web com javascript'
        }
        ,
        {
            progress: "80",
            title: 'Scrum',
            description: 'Conhecimento com metodologia ágeis voltado para o scrum'
        }
        ,
        {
            progress: "35",
            title: 'Docker',
            description: 'Orquestramento de container'
        }
        ,
        {
            progress: "50",
            title: 'Designer',
            description: 'Construção de template utilizando figma'
        }
        ,
        {
            progress: "15",
            title: 'Vue JS',
            description: 'Contrução de páginas web com javascript'
        }
        
        
    ]
}

export default Skills