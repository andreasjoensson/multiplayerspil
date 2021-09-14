import io from 'socket.io-client';
const socket = io('https://multiplayerspil.herokuapp.com');
export default socket;