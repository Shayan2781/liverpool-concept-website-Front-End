import React from "react";

function PlayerCard (props){
    return <div className="players__card">
        <img loading = "lazy"className ="players__card__img"src= {props.img} alt=""/>
        <p className="players__card__name">{props.name}</p>
        <p className="players__card__position">{props.position}</p>
    </div>
}

export default PlayerCard;