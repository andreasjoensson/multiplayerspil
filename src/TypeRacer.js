import React from 'react';
import {Redirect} from 'react-router-dom';
import CountDown from './Countdown';
import StartBtn from './StartBtn'
import DisplayWords from './DisplayWords';
import Keyboard from './Keyboard';
import socket from './socketConfig';
import ProgressBar from './ProgressBar';
import ScoreBoard from './ScoreBoard';



const findPlayer = players => {
return players.find(player => player.socketID === socket.id)
}

const TypeRacer = ({gameState}) => {
const {_id, players, words, isOpen, isOver} = gameState;
const player = findPlayer(players);
if(_id === "")
   return <Redirect to="/"/>
   
return(    
<div className="text-center">
<DisplayWords words={words} player={player}/>
<ProgressBar players={players} player={player} wordsLength={words.length}/>

 <div className="flex-containerr">
 <Keyboard Open={isOpen} isOver={isOver} player={player}gameID={_id}/>  

 <div className="flexflex">
 <CountDown/> 

 <ScoreBoard players={players}/>
 </div>

</div>
</div>
)
}

export default TypeRacer;
