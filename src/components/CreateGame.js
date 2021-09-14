import React, {useState} from 'react';
import socket from '../socketConfig';
import {TextField} from '@material-ui/core';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import './creategame.css'

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

export const CreateGame = props => {
  const classes = useStyles();
const [nickName, setNickname] = useState("");

const onChange = (e) => {
setNickname(e.target.value);
}

const onSubmit = (e) => {
e.preventDefault();
socket.emit('create-game', nickName);
}


return(
<div className="beholder">
<div className="row">
<div className="col-sm">
</div>
<div className="col-sm8">
<h1 className="text-center ba">Opret spil</h1>  
  <form className="bas" autoComplete="off" onSubmit={onSubmit}>
    <div className="form-group">
    <TextField  color="secondary" id="outlined-secondary" name="navn" value={nickName} label="Dit navn" onChange={onChange} variant="outlined" />  
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