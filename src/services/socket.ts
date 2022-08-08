import io from 'socket.io-client';
const socket = io('https://hsi-chat-server.herokuapp.com', {
	transports: ['polling', 'websocket'],
});
export default socket;
