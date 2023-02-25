import React from "react";


function PlayerCard (props){
    return <div className="players__card">
        <img loading = "lazy"className ="players__card__img"src= {props.img} alt=""/>
        <p className="players__card__name">{props.name}</p>
        <p className="players__card__position">{props.position}</p>
    </div>
}

function CreatePlayerCard (player){
    return <div className="center-container"> 
        <PlayerCard
        name = {player.name}
        img = {player.img}
        position = {player.position}
    />
        </div>
}

export default CreatePlayerCard;