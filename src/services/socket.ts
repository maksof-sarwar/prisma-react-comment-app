import io from 'socket.io-client';
const socket = io('https://hsi-chat-server.herokuapp.com');
export default socket;
