import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import {Container, Columns, CopyRight, Content  } from './styles'
// const 
const Footer : React.FC = () => {
    return (
        <Container>
            <Content>
                <Columns>
                    <div className="itens">
                        <div className="headerFooter">
                            <FontAwesomeIcon className="spin" icon={faAtom} />
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
                            <FontAwesomeIcon icon={faNewspaper} />
                            <h2>Novos Notícias</h2>
                        </div>
                        <div className="contentFooter d-flex flex-column">
                            <a href="#" target="_blank">FullStack</a>
                            <a href="#" target="_blank">Mobile</a>
                            <a href="#" target="_blank">Devops</a>
                            <a href="#" target="_blank">Hospedagem</a>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="headerFooter">
                            <FontAwesomeIcon icon={faShippingFast} />
                            <h2>Serviços</h2>
                        </div>
                        <div className="contentFooter d-flex flex-column">
                            <a href="#" target="_blank">WebSite</a>
                            <a href="#" target="_blank">Aplicativos</a>
                            <a href="#" target="_blank">Designer</a>
                        </div>
                    </div>
                    <div className="itens">
                        <div className="headerFooter">
                            <FontAwesomeIcon icon={faNetworkWired} />   
                            <h2>Redes Sociais</h2>
                        </div>
                        <div className="contentFooter">
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=5512988437057">
                                <svg data-src={`${process.env.PUBLIC_URL}/assets/icons/whatsapp-brands.svg`} ></svg>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/ruan-rita-99885a1b6/">
                                <svg data-src={`${process.env.PUBLIC_URL}/assets/icons/linkedin-brands.svg`}></svg>
                            </a>
                            <a target="_blank" href="https://github.com/Ruan-Rita">
                                <svg data-src={`${process.env.PUBLIC_URL}/assets/icons/github-brands.svg`} ></svg>
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
