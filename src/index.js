import React from 'react';
import ReactDOM from 'react-dom';
/*import CurrentGame from './Components/CurrentGame';
import PlayerCard from './Components/PlayerCard';
import player from './players';*/
/*import CurrentGameTeam from './CurrentGameTeam';

const currentGameTeams = [
    {
        logo : "./public/pics/Liverpool_FC.png",
        teamName : "Livepool"
    },
    {
        logo : "./public/pics/Liverpool_FC.png",
        teamName : "Chelsea"
    },
    {
        time : "22:30",
        date : "25/08/2023"
    }
]
*/


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


/*ReactDOM.render(
<CurrentGame 
    


/>
, document.getElementById('current-game-container'));
*/

