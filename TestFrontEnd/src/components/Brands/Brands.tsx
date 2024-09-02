import React, { useState, useRef } from "react";
import "./Brands.scss";
import Vtex from "../../assets/icons/vtexLogo.png"
interface SliderProps {
  // Defina quaisquer propriedades que o componente Slider possa receber, se houver.
}

export default function Brands(){
  const carouselContainer = useRef<HTMLDivElement | null>(null);
  const cardsContainer = useRef<HTMLDivElement | null>(null);
  const [pressed, setPressed] = useState<boolean>(false);
  const startPoint = useRef<number>(0);
  const carouselContainerX = useRef<number>(0);

  const mouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setPressed(true);
    if (cardsContainer.current) {
      startPoint.current = event.pageX - cardsContainer.current.offsetLeft;
    }
    if (carouselContainer.current) {
      carouselContainer.current.style.cursor = "grabbing";
    }
  };

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!pressed) return;
    e.preventDefault();
    carouselContainerX.current = e.pageX;

    if (cardsContainer.current) {
      cardsContainer.current.style.left = `${
        carouselContainerX.current - startPoint.current
      }px`;

      checkBoundaries();
    }
  };

  const checkBoundaries = () => {
    let outer: DOMRect | undefined;
    let inner: DOMRect | undefined;

    if (carouselContainer.current) {
      outer = carouselContainer.current.getBoundingClientRect();
    }

    if (cardsContainer.current) {
      inner = cardsContainer.current.getBoundingClientRect();
    }

    if (outer && inner) {
      if (parseInt(cardsContainer.current!.style.left) > 0) {
        cardsContainer.current!.style.left = "0px";
      } else if (inner.right < outer.right) {
        cardsContainer.current!.style.left = `-${
          inner.width - outer.width
        }px`;
      }
    }
  };

  return (
    <div
      onMouseDown={mouseDown}
      onMouseEnter={() => {
        if (carouselContainer.current) {
          carouselContainer.current.style.cursor = "grab";
        }
      }}
      onMouseUp={() => {
        if (carouselContainer.current) {
          carouselContainer.current.style.cursor = "grab";
        }
        setPressed(false);
      }}
      onMouseLeave={() => {
        if (carouselContainer.current) {
          carouselContainer.current.style.cursor = "default";
        }
        setPressed(false);
      }}
      onMouseMove={mouseMove}
      ref={carouselContainer}
      className="slider"
    >
      <div ref={cardsContainer} className="inner">
        <div className="inner-item">
          <div className="item-name"><img src={Vtex} alt=""/></div>
        </div>
        <div className="inner-item">
          <div className="item-name"><img src={Vtex} alt=""/></div>
        </div>
        <div className="inner-item">
          <div className="item-name"><img src={Vtex} alt=""/></div>
        </div>
        <div className="inner-item">
          <div className="item-name"><img src={Vtex} alt=""/></div>
        </div>
        <div className="inner-item">
          <div className="item-name"><img src={Vtex} alt=""/></div>
        </div>
        <div className="inner-item">
          <div className="item-name"><img src={Vtex} alt=""/></div>
        </div>
        <div className="inner-item">
          <div className="item-name"><img src={Vtex} alt=""/></div>
        </div>
      </div>
    </div>
  );
};