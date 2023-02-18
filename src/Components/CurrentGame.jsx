import React from "react";
import CurrentGameTeam from "./CurrentGameTeam";

function CurrentGame(props){
    return <div className="current-game-card" id = "current-game-card">
    <CurrentGameTeam 
        teamName = {props[0].teamName}
        logo = {props[0].logo}
        id = {props[0].id}
    />
    <CurrentGameTeam 
        teamName = {props[1].teamName}
        logo = {props[1].logo}
        id = {props[1].id}
    />
    <div className="current-game-card__game-date">
      <h2>{props[2].time}</h2>
      <h4>{props[2].date}</h4>
    </div>
  </div>
}

export default CurrentGame;