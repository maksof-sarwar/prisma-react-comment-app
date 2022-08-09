import io from 'socket.io-client';
const socket = io('https://hsi-chat-server.herokuapp.com', {
	transports: ['polling'],
});
export default socket;
