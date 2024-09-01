import { useEffect, useState } from "react";
import axios from "axios";
import './Home.scss';

export default function Home() {
    const selectType = document.querySelectorAll('.selectorsProducts')
    var container = document.getElementById('container')
    var slider = document.getElementById('cardsCarousel');
    var slides = document.getElementsByClassName('card').length;
    var buttons = document.getElementsByClassName('btn')
    
    
    var currentPosition = 0;
    var currentMargin = 0;
    var slidesPerPage = 0;
    var slidesCount = slides - slidesPerPage;
    if(container){
        var containerWidth = container.offsetWidth;
    }

    selectType.forEach(selectorType => {
        selectorType.addEventListener('click', () => {
            console.log(selectorType)
            document.querySelector('.selected')?.classList.remove('selected')
            selectorType.classList.add('selected')
        })
    });

    return (
        <div>
            <span>Hoi</span>

            <section className="sectionProducts">
                <div>
                    <h2>Produtos</h2>
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
                <div className="cardsCarousel">
                    <div className="card">
                        <img src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png" alt="" />
                        <span id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        <span id="discount">R$ 30,90</span>
                        <span id="price">R$ 28,90</span>
                        <span id="paymentOptions">ou 2x de R$ 49,95 sem juros</span>
                        <span id="shipping">Frete grátis</span>
                        <button>Comprar</button>
                    </div>
                    <div className="card">
                        <img src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png" alt="" />
                        <span id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        <span id="discount">R$ 30,90</span>
                        <span id="price">R$ 28,90</span>
                        <span id="paymentOptions">ou 2x de R$ 49,95 sem juros</span>
                        <span id="shipping">Frete grátis</span>
                        <button>Comprar</button>
                    </div>
                    <div className="card">
                        <img src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png" alt="" />
                        <span id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        <span id="discount">R$ 30,90</span>
                        <span id="price">R$ 28,90</span>
                        <span id="paymentOptions">ou 2x de R$ 49,95 sem juros</span>
                        <span id="shipping">Frete grátis</span>
                        <button>Comprar</button>
                    </div>
                    <div className="card">
                        <img src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png" alt="" />
                        <span id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        <span id="discount">R$ 30,90</span>
                        <span id="price">R$ 28,90</span>
                        <span id="paymentOptions">ou 2x de R$ 49,95 sem juros</span>
                        <span id="shipping">Frete grátis</span>
                        <button>Comprar</button>
                    </div>
                </div>
            </section>
        </div>
    )
}