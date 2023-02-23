import React from "react";


function TrophyCard (props){
    return <div className="trophies__holder__trophy-card">
    <img className="trophies__holder__trophy-card__img" src = {props.img} alt="pic"/>
    <h2 className="trophies__holder__trophy-card__title">{props.name}</h2>
    <h3 className="trophies__holder__trophy-card__number">{props.count}</h3>
  </div>
}


function CreateTrophyCard (props){
    return <TrophyCard
        key = {props.key}
        img = {props.img}
        name = {props.name}
        count = {props.count}
    />
}

export default CreateTrophyCard;