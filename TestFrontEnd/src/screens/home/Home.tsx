import axios from "axios";
import './Home.scss';
import RightButton from "../../assets/icons/rightButton.png"
import LeftButton from "../../assets/icons/leftButton.png"
import Showcase from "../../components/productsShowcase/Showcase"
import Article from "../../components/articles/Article"
import ArticlesProducts from "../../components/secondArticles/ArticlesProducts"
import Hr from "../../assets/icons/Line 27.png"

export default function Home() {
    const selectType = document.querySelectorAll('.selectorsProducts')
    const box = document.querySelector('.cardsCarousel');

    selectType.forEach(selectorType => {
        selectorType.addEventListener('click', () => {
            document.querySelector('.selected')?.classList.remove('selected')
            selectorType.classList.add('selected')
        })
    });

    return (
        <div>
            <span>Hoi</span>
            <section>
                <div>
                    <div>
                        <div>
                            <img src="" alt=""/>
                        </div>
                        <span></span>
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
        </div>
    )
}