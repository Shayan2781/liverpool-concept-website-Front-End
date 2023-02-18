import React from "react";

function CurrentGameTeam (props){
    return <div className="current-game-card__team-info" id = {props.id}>
            <img className ="current-game-card__team-info__team-logo"src={props.logo} alt=""/>
            <h3 className="current-game-card__team-info__team-name">{props.teamName}</h3>
    </div>
}

export default CurrentGameTeam;