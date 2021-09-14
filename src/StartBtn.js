import React, { useState } from 'react';
import socket from './socketConfig';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

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

const StartBtn = ({player, gameID}) => {
const classes = useStyles();
const [showBtn, setShowBtn] = useState(true);
const {isPartyLeader} = player;

const onClickHandler = e => {
socket.emit('timer', {playerID : player._id, gameID});
setShowBtn(false);
}

return(
isPartyLeader && showBtn ?   <Fab onClick={onClickHandler} variant="extended" color="secondary" aria-label="add" className={classes.margin}>
<SportsEsportsIcon className={classes.extendedIcon} />
START
</Fab> 
: null
)


}

export default StartBtn;