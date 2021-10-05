import React from "react";

import {Container, Columns, CopyRight, Content  } from './styles'
// const 
const Footer : React.FC = () => {
    return (
        <Container>
            <Content>
                <Columns>
                    <div className="itens">
                        <div className="headerFooter">
                            <img src={process.env.PUBLIC_URL + "/assets/icons/about.png"} alt="" />
                            <h2>Sobre</h2>
                        </div>
                        <div className="contentFooter">
                            <p>Ruan Rita</p>
                            <p>20 anos</p>
                            <p>FullStack</p>
                            <p>Programmer</p>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="headerFooter">
                            <img src={process.env.PUBLIC_URL + "/assets/icons/about.png"} alt="" />
                            <h2>Novos Notícias</h2>
                        </div>
                        <div className="contentFooter">
                            <p>FullStack</p>
                            <p>Mobile</p>
                            <p>Devops</p>
                            <p>Hospedagem</p>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="headerFooter">
                            <img src={process.env.PUBLIC_URL + "/assets/icons/about.png"} alt="" />
                            <h2>Serviços</h2>
                        </div>
                        <div className="contentFooter">
                            <p>WebSite</p>
                            <p>Aplicativos</p>
                            <p>Designer</p>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="headerFooter">
                            <a href="https://www.linkedin.com/in/ruan-rita-99885a1b6/">
                                <img src={process.env.PUBLIC_URL + "/assets/icons/about.png"} alt="" />
                                <h2>WhatsApp</h2>
                                
                            </a>

                        </div>
                        <div className="contentFooter">
                            <p>+55 (12) 98843-7057</p>
                        </div>
                        <div className="headerFooter">
                            <a href="https://www.linkedin.com/in/ruan-rita-99885a1b6/">
                                <img src={process.env.PUBLIC_URL + "/assets/icons/about.png"} alt="" />
                                <h2>Linkedin</h2>
                            </a>
                        </div>
                        
                    </div>
                </Columns>
                <CopyRight>
                    <p>Copyright@2021 all right reserved.</p>
                    <p>This template developed by Ruan Rita</p>
                </CopyRight>
            </Content>
        </Container>
    )
}
const getColumns = () => {

}

export default Footer;
