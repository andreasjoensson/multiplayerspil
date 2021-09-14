import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from '@material-ui/core';
import './gamemenu.css';

export const GameMenu = () => {
let history = useHistory();
return(
<div className="introContainer">
<h1>Velkommen til Skrive<span>.games</span></h1>
<div className="knapContainer">
<Button  size="large" variant="outlined" color="secondary" onClick={() => history.push('/game/create')}>
  Opret nyt spil.
</Button>

<Button size="large"  variant="outlined" color="secondary" onClick={() => history.push('/game/join')}>
  Join spil.
</Button>
</div>
</div>    
)
}