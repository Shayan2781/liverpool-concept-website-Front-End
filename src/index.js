import React from 'react';
import ReactDOM from 'react-dom';
import CurrentGame from './Components/CurrentGame';
import PlayerCard from './PlayerCard';
import player from './players';
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




ReactDOM.render(
<PlayerCard
    name = {player[0].name}
    img = {player[0].img}
    position = {player[0].position}
/>
, document.getElementById('players'));


