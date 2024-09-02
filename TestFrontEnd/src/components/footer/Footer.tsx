import "./Footer.scss"
import LogosFooter from "../../assets/icons/LogosFooter.png"
import Facebook from "../../assets/icons/023-facebook.png"
import Instagram from "../../assets/icons/044-instagram.png"
import Youtube from "../../assets/icons/116-youtube.png"
import Payment from "../../assets/formas_pagamento.png"

export default function Footer(){
    return(
        <footer className="footer">
            <div className="footerTop">
                <div className="footerSecOne">
                    <h2>Sobre nós</h2>
                    <ul>
                        <li>CONHEÇA</li>
                        <li>COMO COMPRAR</li>
                        <li>INDICAÇÃO E DESCONTO</li>
                    </ul>
                    <div>
                        <a href="https://www.facebook.com/agenciaeconverse/?locale=pt_BR"><img src={Facebook} alt=""/></a>
                        <a href="https://www.instagram.com/econverse.ag/"><img src={Instagram} alt=""/></a>
                        <a href="http://"><img src={Youtube} alt=""/></a>
                    </div>
                </div>

                <div className="footerSecTwo">
                    <h2>INFORMAÇÕES ÚTEIS</h2>
                    <ul>
                        <li>FALE CONOSCO</li>
                        <li>DÚVIDAS</li>
                        <li>PRAZO DE ENTREGA</li>
                        <li>FORMAS DE PAGAMENTO</li>
                        <li>POLÍTICA DE PRIVACIDADE</li>
                        <li>TERMO DE DEVOLUÇÕES</li>
                    </ul>
                </div>

                <div className="footerSecThree">
                    <h2>FORMAS DE PAGAMENTO</h2>
                    <img src={Payment} alt="pay" className="pay-image"/>
                </div>

                <div className="newsLetter">
                    <span className="titleThin">Cadastre-se e Receba nossas<br/><span className="titleBold">novidades e promoções</span></span>
                    <span className="lorem">
                        Excepteur sint occaecat cupidatat non ent, sunt in culpa qui officia lorem ipsum
                    </span>
                    <div className="buttonNews">
                        <input type="email" placeholder="SEU EMAIL" />
                        <button>OK</button>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <span>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
                É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</span>
                <img src={LogosFooter} alt="" />
            </div>
        </footer>
    )
}