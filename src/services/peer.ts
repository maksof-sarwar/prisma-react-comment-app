import { Peer } from 'peerjs';
const peerClient = new Peer({
	host: 'localhost',
	port: 8001,
	path: '/peerjs',
});
export default peerClient;
