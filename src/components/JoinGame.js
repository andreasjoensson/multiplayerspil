import React, {useState} from 'react';
import socket from '../socketConfig';
import {TextField} from '@material-ui/core';
import './joingame.css';
import { makeStyles } from '@material-ui/core/styles';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';import Fab from '@material-ui/core/Fab';
const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      extendedIcon: {
        marginRight: theme.spacing(1),
      },
    }));
export const JoinGame = () => {
    const [userInput, setUserInput] = useState({gameID: "", nickName: ""});

    const onChange = (e) => {
    setUserInput({...userInput, [e.target.name] : e.target.value});
    }
    
    const onSubmit = (e) => {
    console.log(userInput)
    e.preventDefault();
    socket.emit('join-game', userInput);
    }
   const classes = useStyles();

    return(
    <div className="beholder">
    <div className="row">
    <div className="col-sm">
    </div>
    <div className="col-sm8">
    <h1 className="text-center">Join Game</h1>  
      <form autoComplete="off">
        <div className="form-group">
        <TextField color="secondary" id="outlined-secondary" name="gameID" value={userInput.gameID} label="Indtast GameID" onChange={onChange} variant="outlined" />   
        <TextField color="secondary"  id="outlined-secondary" name="nickName" value={userInput.nickName} label="Indtast navn" onChange={onChange} variant="outlined" />   
        </div>
        <Fab onClick={onSubmit} variant="extended" color="secondary" aria-label="add" className={classes.margin}>
          <SportsEsportsIcon className={classes.extendedIcon} />
          Spil
        </Fab>
      </form>
    </div>
    <div className="col-sm"></div>
    </div>    
    </div>
    )
}