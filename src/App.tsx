import peerClient from '@/services/peer';
import React, { useEffect } from 'react';

export const App: React.FC = () => {
	useEffect(() => {
		peerClient.on('connection', (data) => {
			console.log(data, `PEER`);
		});
	}, []);
	return <div>App</div>;
};
