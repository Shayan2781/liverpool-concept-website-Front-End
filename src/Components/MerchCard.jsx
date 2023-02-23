import React from "react";

function MerchCard (props){
    return <div className="merch__card">
    <img loading="lazy" className = "merch__card__img"src={props.img} alt=""/>
    <h3 className="merch__card__title">{props.name}</h3>
    <div className = "merch__card__price-holder">
      <p className="merch__card__old-price">{props.oldPrice}</p>
      <p className="merch__card__new-price">{props.newPrice}</p>
    </div>
    <a className = "merch__card__purchase"href="#">Add to cart</a>
  </div>
    
}

function CreateMerchCard (props){
    return <MerchCard
      key = {props.id}
      img = {props.img}
      name = {props.name}
      oldPrice = {props.oldPrice}
      newPrice = {props.newPrice}
    />
}

export default CreateMerchCard;