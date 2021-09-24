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
                            <p></p>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="headerFooter">
                            <img src={process.env.PUBLIC_URL + "/assets/icons/about.png"} alt="" />
                            <h2>Novos Notícias</h2>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="headerFooter">
                            <img src={process.env.PUBLIC_URL + "/assets/icons/about.png"} alt="" />
                            <h2>Informação</h2>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="headerFooter">
                            <img src={process.env.PUBLIC_URL + "/assets/icons/about.png"} alt="" />
                            <h2>WhatsApp</h2>
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
