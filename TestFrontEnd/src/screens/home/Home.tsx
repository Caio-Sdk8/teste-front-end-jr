import axios from "axios";
import './Home.scss';
import RightButton from "../../assets/icons/rightButton.png"
import LeftButton from "../../assets/icons/leftButton.png"
import Footer from "../../components/footer/Footer";
import Showcase from "../../components/productsShowcase/Showcase"
import Article from "../../components/articles/Article"
import ArticlesProducts from "../../components/secondArticles/ArticlesProducts"
import Hr from "../../assets/icons/Line 27.png"
import Vtex from "../../assets/icons/vtexLogo.png"
import Tecnology from "../../assets/icons/tecnologiaIcon.png"
import Supermarket from "../../assets/icons/supermercados.png"
import Drinks from "../../assets/icons/whiskey.png"
import Tools from "../../assets/icons/ferramentas.png"
import Health from "../../assets/icons/cuidados-de-saude.png"
import Fitness from "../../assets/icons/corrida.png"
import Dress from "../../assets/icons/moda.png"
import Header from "../../components/header/Header"
import Brands from "../../components/Brands/Brands";

export default function Home() {
    const selectType = document.querySelectorAll('.selectorsProducts')
    

    selectType.forEach(selectorType => {
        selectorType.addEventListener('click', () => {
            document.querySelector('.selected')?.classList.remove('selected')
            selectorType.classList.add('selected')
        })
    });

    return (
        <div id="body">
            <Header></Header>
            <div className="banner">
                <div className="bannerContent">
                    <span className="bannerTitle">Venha conhecer nossas promoções</span>
                    <span className="bannerDiscount">50% Off nos produtos </span>
                    <button>Ver produto</button>
                </div>
            </div>
            <section className="categoryContainer">
                <div className="categorySection">
                    <div className="category">
                        <div className="iconCategory">
                            <img src={Tecnology} alt=""/>
                        </div>
                        <span id="selectedCategory">Tecnologia</span>
                    </div>
                    <div className="category">
                        <div className="iconCategory">
                            <img src={Supermarket} alt=""/>
                        </div>
                        <span>Supermercado</span>
                    </div>
                    <div className="category">
                        <div className="iconCategory">
                            <img src={Drinks} alt=""/>
                        </div>
                        <span>Bebidas</span>
                    </div>
                    <div className="category">
                        <div className="iconCategory">
                            <img src={Tools} alt=""/>
                        </div>
                        <span>Ferramentas</span>
                    </div>
                    <div className="category">
                        <div className="iconCategory">
                            <img src={Health} alt=""/>
                        </div>
                        <span>Saúde</span>
                    </div>
                    <div className="category">
                        <div className="iconCategory">
                            <img src={Fitness} alt=""/>
                        </div>
                        <span>Esportes e Fitness</span>
                    </div>
                    <div className="category">
                        <div className="iconCategory">
                            <img src={Dress} alt=""/>
                        </div>
                        <span>Moda</span>
                    </div>
                </div>
            </section>
            <section className="sectionProducts">
                <div className="sectionTitle">
                    <img src={Hr} alt=""/>
                    <h2>Produtos relacionados</h2>
                    <img src={Hr} alt=""/>
                </div>
                <nav className="navProducts">
                    <ul>
                        <li className="selected selectorsProducts">Celular</li>
                        <li className="selectorsProducts">Acessórios</li>
                        <li className="selectorsProducts">Tablets</li>
                        <li className="selectorsProducts">Notebooks</li>
                        <li className="selectorsProducts">Tvs</li>
                        <li className="selectorsProducts">Ver todos</li>
                    </ul>
                </nav>
                <Showcase adress="http://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"/>
            </section>
            <section className="articlesSec">
                <Article title= "Parceiros"></Article>
                <div className="secondSection">
                    <div className="sectionTitle">
                        <img src={Hr} alt=""/>
                        <h2>Produtos relacionados</h2>
                        <img src={Hr} alt=""/>
                    </div>
                    <span>Ver todos</span>
                </div>
                <ArticlesProducts title= "Produtos"></ArticlesProducts>
            </section>
            <section className="brands">
                <h2>Navegue por marcas</h2>
                <div className="containerBrands">
                    <Brands></Brands>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}