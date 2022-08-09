import socket from '@/services/socket';
import { Peer } from 'peerjs';
import React, { useEffect, useRef, useState } from 'react';
const callId = `${12341234123412341234 + Date.now()}`;
export const App: React.FC = () => {
	const [stream, setStream] = useState<any>(null);
	const [peerClient, setPeerClient] = useState<any>();
	const localVideo = useRef<HTMLVideoElement>(null);
	const remoteVideo = useRef<HTMLVideoElement>(null);
	const [user, setUser] = useState<any>(null);
	const [call, setCall] = useState<any>(null);
	useEffect(() => {
		(async () => {
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: true,
				video: true,
			});
			setStream(stream);
			const peerClient = new Peer({
				host: 'hsi-chat-server.herokuapp.com',
				path: '/peerjs',
				secure: true,
			});
			setPeerClient(peerClient);
		})();
	}, []);
	useEffect(() => {
		if (!stream || !peerClient) return;
		localVideo.current!.srcObject = stream;

		peerClient.on('open', function (userId) {
			console.log(userId);
			socket.emit('JOIN_ROOM', { roomId: 10, userId });
		});
		socket.on('USER_CONNECTED', (userId) => {
			console.log('USER_CONNECTED', userId);
			setUser(userId);
		});
		peerClient.on('call', function (call) {
			console.log('incoming', call);
			call.answer(stream);
			call.on('stream', (remoteStream: any) => {
				remoteVideo.current!.srcObject = remoteStream;
			});
		});
	}, [stream]);

	const connectedToUser = (peerClient, userId, stream) => {
		const call = peerClient.call(userId, stream);
		setCall(call);
		call.on('stream', (remoteStream: any) => {
			remoteVideo.current!.srcObject = remoteStream;
		});
	};
	return (
		<div>
			<h1>{user}</h1>
			<h1>local</h1>
			<video ref={localVideo} autoPlay muted></video>
			<h1>remote</h1>
			<video ref={remoteVideo} autoPlay muted></video>

			<button
				style={{}}
				onClick={() => connectedToUser(peerClient, user, stream)}>
				CALL
			</button>
			{call ? (
				<button style={{}} onClick={() => call.close()}>
					endCall
				</button>
			) : null}

			<button
				style={{}}
				onClick={() => {
					navigator.mediaDevices
						.getDisplayMedia({ audio: true, video: true })
						.then((stream) => {
							localVideo.current!.srcObject = stream;
							connectedToUser(peerClient, user, stream);
						});
				}}>
				share screen
			</button>
			<button
				style={{}}
				onClick={() => {
					localVideo.current!.srcObject = stream;
					connectedToUser(peerClient, user, stream);
				}}>
				close share screen
			</button>
		</div>
	);
};
