import React from 'react';
import ReactDOM from 'react-dom';
import CurrentGameTeam from './Components/CurrentGameTeam';
import PlayerCard from './Components/PlayerCard';
import players from './Data/players';
import Carousel from 'react-multi-carousel';
import CreateMerchCard from './Components/MerchCard';
import merch from './Data/merch';
import CreateTrophyCard from './Components/TrophyCard';
import trophies from './Data/trophies';
import currentGameTeams from './Data/currentGame';
/*import CurrentGame from './Components/CurrentGame';*/

const burger = document.querySelector(".header-bar__hamburger");
const nav = document.querySelector(".header-bar_anchor-holder");
const line1 = document.querySelector(".header-bar__hamburger__line:nth-child(1)");
const line2 = document.querySelector(".header-bar__hamburger__line:nth-child(2)");
const line3 = document.querySelector(".header-bar__hamburger__line:nth-child(3)");

burger.addEventListener("click", function(){
    line1.classList.toggle("header-bar__hamburger__line1");
    line2.classList.toggle("header-bar__hamburger__line2");
    line3.classList.toggle("header-bar__hamburger__line3");
    nav.classList.toggle("display__nav");

})


function CreatePlayerCard (player){
    return <PlayerCard
        name = {player.name}
        img = {player.img}
        position = {player.position}
    />
}


ReactDOM.render(
<div className="current-game-card" id = "current-game-card">
    <CurrentGameTeam 
        teamName = {currentGameTeams[0].teamName}
        img = {currentGameTeams[0].logo}
        id = {currentGameTeams[0].id}
    />
    <CurrentGameTeam 
        teamName = {currentGameTeams[1].teamName}
        img = {currentGameTeams[1].logo}
        id = {currentGameTeams[1].id}
    />
    <div className="current-game-card__game-date">
      <h2>{currentGameTeams[2].time}</h2>
      <h4>{currentGameTeams[2].date}</h4>
    </div>
  </div>
, document.getElementById('current-game-container'));

ReactDOM.render( 
  <div className="merch">
      {merch.map(CreateMerchCard)}
  </div>

, document.getElementById("merch"));

ReactDOM.render(
  <div className='trophies__holder'>
    {trophies.map(CreateTrophyCard)}
  </div>
, document.getElementById('trophies'));


