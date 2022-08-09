import App from '@/App';
import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.css';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
const root = document.getElementById('root') as HTMLElement;

const INDEX: React.ReactElement = (
	<React.Fragment>
		<Suspense fallback={<h1>Loading ....</h1>}>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</Suspense>
	</React.Fragment>
);
createRoot(root).render(INDEX);
