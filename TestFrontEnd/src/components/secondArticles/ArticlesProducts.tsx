import { FC } from "react";
import "./ArticlesProducts.scss";

interface ArticleProps{
    title : string
}
export default function ArticlesProducts(props:ArticleProps): ReturnType<FC>{
    return(
        <article className="arcticleProdCards">
            <div className="arcticleProd">
                <div>
                    <span className="tittleCard">{props.title}</span>
                    <span className="descriptionCard">Lorem ipsum dolor sit amet, consectetur</span>
                    <button>Confira</button>
                </div>
            </div>
            <div className="arcticleProd">
                <div>
                    <span className="tittleCard">{props.title}</span>
                    <span className="descriptionCard">Lorem ipsum dolor sit amet, consectetur</span>
                    <button>Confira</button>
                </div>
            </div>
        </article>
    )
}