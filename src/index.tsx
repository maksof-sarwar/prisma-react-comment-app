import App from '@/App';
import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.css';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
const root = document.getElementById('root') as HTMLElement;

const INDEX: React.ReactElement = (
	<React.Fragment>
		<Suspense fallback={<h1>Loading ....</h1>}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Suspense>
	</React.Fragment>
);
createRoot(root).render(INDEX);
