import React, {useRef, useState} from 'react';
import StartBtn from './StartBtn';

const DisplayGameCode = ({player, gameID}) => {
const [copySuccess, setCopySuccess] = useState(false);
const textInputRef = useRef(null);

const copyToClipboard = (e) => {
textInputRef.current.select();
document.execCommand("copy");
setCopySuccess(true);
}  

return(
  <div className="row my-3 text-center game">
    <div className="col-sm"></div>  
    <div className="col-sm-8">  
    <div className="input-group mb-3">
       <input type="text" ref={textInputRef} value={gameID} readOnly className="form-control"/>
   <div className="input-group-append">
       <button className="btn btn-outline-secondary" onClick={copyToClipboard} type="button">Kopier linket</button>
   </div>
    </div>
     <StartBtn player={player} gameID={gameID}/>
    {copySuccess ? <div className="alert alert-success" role="alert">Kopieret</div>:null}
    </div>  
    <div className="col-sm"></div>  
  </div>  
)
}
export default DisplayGameCode;