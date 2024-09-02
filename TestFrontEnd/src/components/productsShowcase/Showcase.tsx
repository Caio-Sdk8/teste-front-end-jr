import React from "react";
import { useEffect, useState } from "react"
import axios from "axios"
import "./showcase.scss"
import RightButton from "../../assets/icons/rightButton.png"
import LeftButton from "../../assets/icons/leftButton.png"
import Modal from "../modal/Modal";
import Minus from "../../assets/icons/minus.svg"
import Plus from "../../assets/icons/plus.svg"

interface Url{
    adress: string;
}
interface Product{
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}

const Showcase : React.FC<Url> = (props) =>{
    const [products, setProducts] = useState<Product[]>([]);
    const [product, setProduct] = useState<Product | null>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [amount, setCount] = useState(0)

    function toggleModal() {
        setShowModal(!showModal);
    }

    //Simulação de requisição - ao tentar fazer a requisição tive erro de cors
    useEffect(() =>{
        const fetchProductsDetails = async () => {
            try {
                console.log(props.adress)
                const response = await axios.get<Product[]>(props.adress);
                setProducts(response.data);
                console.log(response)
            } catch (err) {
                setError('Erro ao carregar os produtos.');
                    //Como não consegui os dados via requisição, então inputei manualmente os dados disponibilizados
        setProducts([
            {
                "productName": "Iphone 11 PRO MAX BRANCO 1",
                "descriptionShort": "Iphone 11 PRO MAX BRANCO 1",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 15000
            },
            {
                "productName": "IPHONE 13 MINI 1",
                "descriptionShort": "IPHONE 13 MINI 1",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 9000
            },
            {
                "productName": "Iphone 11 PRO MAX BRANCO 2",
                "descriptionShort": "Iphone 11 PRO MAX BRANCO 2",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 14990
            },
            {
                "productName": "IPHONE 13 MINI 2",
                "descriptionShort": "IPHONE 13 MINI 2",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 12000
            },
            {
                "productName": "Iphone 11 PRO MAX BRANCO 3",
                "descriptionShort": "Iphone 11 PRO MAX BRANCO 3",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 4550
            },
            {
                "productName": "IPHONE 13 MINI 3",
                "descriptionShort": "IPHONE 13 MINI 3",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 38000
            },
            {
                "productName": "Iphone 11 PRO MAX BRANCO 4",
                "descriptionShort": "Iphone 11 PRO MAX BRANCO 4",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 42000
            },
            {
                "productName": "IPHONE 13 MINI 4",
                "descriptionShort": "IPHONE 13 MINI 4",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 520
            },
            {
                "productName": "Iphone 11 PRO MAX BRANCO 5",
                "descriptionShort": "Iphone 11 PRO MAX BRANCO 5",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 149990
            },
            {
                "productName": "IPHONE 13 MINI 5",
                "descriptionShort": "IPHONE 13 MINI 5",
                "photo": "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
                "price": 100000
            }
        ]);
            } finally {
                setLoading(false);
            }
        };
        fetchProductsDetails();
    }, [props.adress]);

    const handleBuyClick = (product: Product) => {
        setProduct(() => {
            toggleModal();
            return product;
        });
    };

    const box = document.querySelector('.cardsCarousel');
    const btnpressprev = () => {
        if(box){
            let width = 332;
            box.scrollLeft = box.scrollLeft - width;
            console.log(width)
        }
    }

    const btnpressnext = () => {
        if(box){
            let width = 332;
            box.scrollLeft = box.scrollLeft + width;
            console.log(width)
        }
    }
    return(
        <div id="container" className="containerCarousel">

        <button className="carouselButtons" onClick={btnpressprev}><img src={LeftButton} alt="Botão Direito"/></button>
            <div id="slider"className="cardsCarousel">
                {
                    products.map((product) =>(
                        <div className="card">
                            <img src={product.photo} alt="" />
                            <span id="description">{product.descriptionShort}</span>
                            <div>
                                <span id="discount">{product.price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}</span>
                                <span id="price">{product.price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}</span>
                                <span id="paymentOptions">ou 2x de R$ 49,95 sem juros</span>
                                <span id="shipping">Frete grátis</span>
                            </div>
                            <button onClick={() => handleBuyClick(product)}>Comprar</button>
                        </div>
                    ))
                }
            </div>
            <button id="start-button" className="carouselButtons" onClick={btnpressnext}><img src={RightButton} alt="Botão Direito"/></button>
            <Modal open={showModal} onClose={toggleModal}>
                <div className="modalClass">
                    <img src={product?.photo} alt="" />
                    <div className="modalContent">
                        <span id="modalProduct">{product?.productName}</span>
                        <span id="modalPrice">{product?.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}</span>
                        <span id="modalDescription">{product?.descriptionShort}</span>
                        <span id="modalDetails">Veja mais detalhes do produto &gt; </span>
                        <div className="amountCounter">
                            <button className="minus" onClick={() => setCount((count) => count - 1)}><img src={Minus}/></button>
                            <input type="text" value={amount} />
                            <button className="plus" onClick={() => setCount((count) => count + 1)}><img src={Plus}/></button>
                        </div>
                        <button type="button" className="btn" onClick={toggleModal}>
                            Comprar
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Showcase;