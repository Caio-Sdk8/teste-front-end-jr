import { FC } from "react";
import "./Article.scss";

interface ArticleProps{
    title : string
}
export default function Article(props:ArticleProps): ReturnType<FC>{
    return(
        <article className="arcticleCards">
            <div className="arcticle">
                <div>
                    <span className="tittleCard">{props.title}</span>
                    <span className="descriptionCard">Lorem ipsum dolor sit amet, consectetur</span>
                    <button>Confira</button>
                </div>
            </div>
            <div className="arcticle">
                <div>
                    <span className="tittleCard">{props.title}</span>
                    <span className="descriptionCard">Lorem ipsum dolor sit amet, consectetur</span>
                    <button>Confira</button>
                </div>
            </div>
        </article>
    )
}