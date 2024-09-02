import "./Header.scss"
import Vtex from "../../assets/icons/vtexLogo.png"
import Send from "../../assets/icons/sender.png"
import Heart from "../../assets/icons/Heart.png"
import User from "../../assets/icons/UserCircle.png"
import Cart from "../../assets/icons/ShoppingCart.png"
import Search from "../../assets/icons/search.png"
import Shield from "../../assets/icons/ShieldCheck.png"
import Delivery from "../../assets/icons/Truck.png"
import Payment from "../../assets/icons/CreditCard.png"

export default function Header(){
    return(
        <header>
            <div className="startHeader">
                <div className="contentStart">
                    <img src={Shield} alt=""/>
                    <span>Compra <span className="decoy">100% segura</span></span>
                </div>
                <div className="contentStart">
                    <img src={Delivery} alt=""/>
                    <span><span className="decoy">Frete grátis</span> acima de R$ 200</span>
                </div>
                <div className="contentStart">
                    <img src={Payment} alt=""/>
                    <span><span className="decoy">Parcele</span> suas compras</span>
                </div>
            </div>
            <div className="mainHeader">
                <img src={Vtex} alt=""/>
                <div className="inputArea">
                    <input type="text" placeholder="O que você está buscando?"/>
                    <button><img src={Search} alt=""/></button>
                </div>
                <div className="iconsArea">
                    <img id="sender" src={Send} alt=""/>
                    <img src={Heart} alt=""/>
                    <img src={User} alt=""/>
                    <img src={Cart} alt=""/>
                </div>
            </div>
            <div className="headerCategory">
                <span>Todas Categorias</span>
                <span>Supermercado</span>
                <span>Livros</span>
                <span>Moda</span>
                <span>Lançamentos</span>
                <span>Ofertas do dia</span>
                <span>
                    <img src="" alt="" />
                    Assinatura
                </span>
            </div>
        </header>
    )
}