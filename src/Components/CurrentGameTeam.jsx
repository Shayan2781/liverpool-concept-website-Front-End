import React from "react";

function CurrentGameTeam (props){
    return <div className="current-game-card__team-info" id = {props.id}>
            <img className ="current-game-card__team-info__team-logo"src= {process.env.PUBLIC_URL + props.img} alt="pic"/>
            <h3 className="current-game-card__team-info__team-name">{props.teamName}</h3>
    </div>
}

export default CurrentGameTeam;