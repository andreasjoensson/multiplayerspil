import React,{useEffect, useState, useRef} from 'react';
import './Keyboard.css';
import socket from './socketConfig';
import DisplayGameCode from './DisplayGameCode';

const Keyboard = ({isOpen,isOver,gameID, player}) => {
const [userInput, setUserInput] = useState("");
const textInput = useRef(null);
const [active, setActive] = useState(false);

useEffect(() => {
    if(!isOpen){
        textInput.current.focus();
}
},[isOpen])

const resetForm = () => {
 setUserInput("");
} 

const onChange = e => {
    let value = e.target.value;
    let lastChar = value.charAt(value.length -1);
    setUserInput(e.target.value);
    if(lastChar === " "){ 
        socket.emit('userInput', {userInput, gameID});
        resetForm();
    } 
    else{
    setUserInput(e.target.value);
    }

}    




const animati = (e) => {
    switch(e.code){
    case "AltRight":
        setTimeout(() => {
            document.querySelector(".AltRight").classList.toggle("active")   
           }, 100);    
        break;
        
        case "AltLeft":
            setTimeout(() => {
                document.querySelector(".AltLeft").classList.toggle("active")   
               }, 100);    
            break;


        case "ControlLeft":
        setTimeout(() => {
            document.querySelector(".CtrlLeft").classList.toggle("active")   
           }, 100);    
        break;

        case "ControlRight":
            setTimeout(() => {
                document.querySelector(".CtrlRight").classList.toggle("active")   
               }, 100);    
            break;


        
        case "*":
        setTimeout(() => {
            document.querySelector(".*").classList.toggle("active")   
           }, 100);    
        break;
        
        
                    case "Backspace":
                    document.querySelector(".backspace").classList.toggle("active")  
                    setTimeout(() => {
                        document.querySelector(".backspace").classList.toggle("active")   
                       }, 100);    
                    break;
                    case "Quote":
                        document.querySelector(".ø").classList.toggle("active")  
                        setTimeout(() => {
                            document.querySelector(".ø").classList.toggle("active")   
                           }, 100);    
                        break;
        
                        case "Semicolon":
                        document.querySelector(".æ").classList.toggle("active")  
                        setTimeout(() => {
                            document.querySelector(".æ").classList.toggle("active")   
                           }, 100);  
                        break; 
        
                        case "BracketLeft":
                            document.querySelector(".å").classList.toggle("active")  
                            setTimeout(() => {
                                document.querySelector(".å").classList.toggle("active")   
                               }, 100);    
                            break;    
        
                            case "Period":
                                document.querySelector(".period").classList.toggle("active")  
                                setTimeout(() => {
                                    document.querySelector(".period").classList.toggle("active")   
                                   }, 100);    
                                break; 
        
                                case "Comma":
                                    document.querySelector(".comma").classList.toggle("active")  
                                    setTimeout(() => {
                                        document.querySelector(".comma").classList.toggle("active")   
                                       }, 100);    
                                    break; 
                                    case "Minus":
                                        document.querySelector(".?").classList.toggle("active")  
                                        setTimeout(() => {
                                            document.querySelector(".?").classList.toggle("active")   
                                           }, 100);    
                                        break; 
                
        
                    case "Space":
                    document.querySelector(".space").classList.toggle("active")  
                    setTimeout(() => {
                        document.querySelector(".space").classList.toggle("active")   
                       }, 200);    
                    break;    
        
                
                    case "CapsLock":
                        document.querySelector(".capslock").classList.toggle("keyboard__key--active"); 
                        break;    
                
                    case "Enter":
                        document.querySelector(".enter").classList.toggle("active"); 
                        setTimeout(() => {
                         document.querySelector(".enter").classList.toggle("active")   
                        }, 200); 
                        break; 

                    
                    
                    default:
                    console.log(e.code);
                    if(e.code ==null){
                    return;
                    }
                    let bogstav = e.code.substring(e.code.length-1, e.code.length).toLowerCase();
                    document.querySelector("."+bogstav).classList.toggle("active");
                    setTimeout(() => {
                        document.querySelector("."+bogstav).classList.toggle("active")   
                       }, 500); 
                    break;
}}

useEffect(() => {
    window.addEventListener('keydown', animati, onChange);
}, [])
const onTryk = (e) =>{
    textInput.current.focus();
    setAktiv(true);
}

const [aktiv, setAktiv] = useState(false);
return(
<div>
<input type="hidden" className="input" onClick={onTryk} onChange={onChange} readOnly={isOpen || isOver} value={userInput} ref={textInput}/>

<div onClick={onTryk} className={aktiv ? 'keyboard keyboard--hidden' :'keyboard--false'} style={{cursor:"pointer"}}>
    <div className="keyboard__keys">
        <button className={"keyboard__key 1 " + (active ? 'active' : 'hidden')}>1
        </button>
        <button type="button" className={"keyboard__key 2 " + (active ? 'active' : 'hidden')}>
            2
        </button><button type="button" className={"keyboard__key 3 " + (active ? 'active' : 'hidden')}>
            3
        </button>
        
        <button type="button" className={"keyboard__key 4 " + (active ? 'active' : 'hidden')}>
            4
        </button>
        <button type="button" className={"keyboard__key 5 " + (active ? 'active' : 'hidden')}>
            5
        </button>
            
        <button type="button" className={"keyboard__key 6 " + (active ? 'active' : 'hidden')}>
            6
        </button>
            
        <button type="button" className={"keyboard__key 7 " + (active ? 'active' : 'hidden')}>
            7
        </button>
        
        <button type="button" className={"keyboard__key 8 " + (active ? 'active' : 'hidden')}>
            8
        </button>
        
        <button type="button" className={"keyboard__key 9 " + (active ? 'active' : 'hidden')}>
            9
        </button>
        
        <button type="button" className={"keyboard__key 0 " + (active ? 'active' : 'hidden')}>
            0</button>
        
        <button type="button" className={"keyboard__key ? " + (active ? 'active' : 'hidden')}>
            ?
        </button>
        
        <button type="button" className={"keyboard__key `` " + (active ? 'active' : 'hidden')}>
            ``
        </button>
        
        <button type="button" className={"keyboard__key backspace keyboard__key--wide " +(active ? 'active' : 'hidden')}>
            <i className="material-icons">backspace</i>
            </button><br></br>
            
        <button type="button" className={"keyboard__key q " + (active ? 'active' : 'hidden')}>
            q
        </button>
        
        <button type="button" className={"keyboard__key w " + (active ? 'active' : 'hidden')}>
            w
        </button>
        
        <button type="button" className={"keyboard__key e " + (active ? 'active' : 'hidden')}>
            e
        </button>
        
        <button type="button" className={"keyboard__key r " + (active ? 'active' : 'hidden')}>
            r
        </button>
        
        <button type="button" className={"keyboard__key t " + (active ? 'active' : 'hidden')}>
            t
        </button>
        
        <button type="button" className={"keyboard__key y " + (active ? 'active' : 'hidden')}>
            y
        </button>
        
        <button type="button" className={"keyboard__key u " + (active ? 'active' : 'hidden')}>
            u
        </button>
        
        <button type="button" className={"keyboard__key i " + (active ? 'active' : 'hidden')}>
            i
        </button>
        
        <button type="button" className={"keyboard__key o " + (active ? 'active' : 'hidden')}>
            o
        </button>
        
        <button type="button" className={"keyboard__key p " + (active ? 'active' : 'hidden')}>
            p
        </button>
        
        <button type="button" className={"keyboard__key å " + (active ? 'active' : 'hidden')}>
            å
        </button>
        
        <button type="button" className={"keyboard__key ^ " + (active ? 'active' : 'hidden')}>
            ^
        </button>
        
        
        <button type="button" className={"keyboard__key enter keyboard__key--wide " +(active ? 'active' : 'hidden')}>
            <i className="material-icons">keyboard_return</i>
            </button><br></br>
            
            <button type="button" className={"keyboard__key capslock keyboard__key--wide " +(active ? 'active' : 'hidden')}>
                <i className="material-icons">keyboard_capslock</i>
                </button>
                
                
                <button type="button"  className={"keyboard__key a " + (active ? 'active' : 'hidden')}>
                    a
                </button>
                
                <button type="button"  className={"keyboard__key s " + (active ? 'active' : 'hidden')}>
                    s
                </button>
                
                <button type="button"  className={"keyboard__key d " + (active ? 'active' : 'hidden')}>
                    d
                </button>
                
                <button type="button"  className={"keyboard__key f " + (active ? 'active' : 'hidden')}>
                    f
                </button>
                
                <button type="button"  className={"keyboard__key g " + (active ? 'active' : 'hidden')}>
                    g
                </button>
                
                <button type="button"  className={"keyboard__key h " + (active ? 'active' : 'hidden')}>
                    h
                </button>
                
                <button type="button"  className={"keyboard__key j " + (active ? 'active' : 'hidden')}>
                    j
                </button>
                
                <button type="button"  className={"keyboard__key k " + (active ? 'active' : 'hidden')}>
                    k
                </button>
                
                <button type="button"  className={"keyboard__key l " + (active ? 'active' : 'hidden')}>
                    l
                </button>
                
                <button type="button"  className={"keyboard__key æ " + (active ? 'active' : 'hidden')}>
                    æ
                </button>
                
                <button type="button"  className={"keyboard__key ø " + (active ? 'active' : 'hidden')}>
                    ø
                </button>
                
                <button type="button"  className={"keyboard__key * " + (active ? 'active' : 'hidden')}>
                    *
                </button><br></br>
                
                <button type="button" className={"keyboard__key shift keyboard__key--wide " +(active ? 'active' : 'hidden')}>
                    Shift
                </button>
                
                <button type="button" className={"keyboard__key z " + (active ? 'active' : 'hidden')}>
                    z
                </button> 
                
                <button type="button" className={"keyboard__key x " + (active ? 'active' : 'hidden')}>
                    x
                </button>
                
                <button type="button" className={"keyboard__key c " + (active ? 'active' : 'hidden')}>
                    c
                </button>
                
                <button type="button" className={"keyboard__key v " + (active ? 'active' : 'hidden')}>
                    v
                </button>
                
                <button type="button" className={"keyboard__key b " + (active ? 'active' : 'hidden')}>
                    b
                </button>
                
                
                <button type="button" className={"keyboard__key n " + (active ? 'active' : 'hidden')}>
                    n
                </button>
                
                <button type="button" className={"keyboard__key m " + (active ? 'active' : 'hidden')}>
                    m
                </button>
                
                <button type="button" className={"keyboard__key comma " + (active ? 'active' : 'hidden')}>
                    .
                </button>
                
                <button type="button" className={"keyboard__key period " + (active ? 'active' : 'hidden')}>
                    .
                </button>
                
                <button type="button"className={"keyboard__key - " + (active ? 'active' : 'hidden')}>
                    -
                </button><br></br>
                
                <button type="button" className={"keyboard__key CtrlLeft keyboard__key--wide " +(active ? 'active' : 'hidden')}>
                    Ctrl
                </button>
                
                <button type="button" className={"keyboard__key AltLeft keyboard__key--wide " +(active ? 'active' : 'hidden')}>
                    Alt
                </button>
                
                <button type="button" className={"keyboard__key space keyboard__key--extra-wide " +(active ? 'active' : 'hidden')}>
                    <i className="material-icons">space_bar</i>
                </button>
                    
                <button type="button" className={"keyboard__key CtrlRight keyboard__key--wide " +(active ? 'active' : 'hidden')}>
                    Ctrl
                </button>
                
                <button type="button" className="keyboard__key AltRight keyboard__key--wide Space">Alt</button>
                <DisplayGameCode player={player} gameID={gameID}/>
</div>
</div>


</div>
)
}


export default Keyboard; 