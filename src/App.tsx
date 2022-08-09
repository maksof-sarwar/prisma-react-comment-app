import { Routes, Route, Link, Navigate } from 'react-router-dom';
import RouteArray from './Routes';
import { IRoute } from './models/route.model';
const App = () => {
	return (
		<div>
			<Routes>
				{RouteArray.map((route: IRoute, i: number) => {
					return (
						<Route
							key={i}
							path={route.path}
							element={
								route.component ? (
									<route.component />
								) : (
									<Navigate to={route.data.to} />
								)
							}>
							{route.children?.map((rc, j: number) => {
								return (
									<Route
										path={rc.path}
										element={
											rc.component ? (
												<rc.component />
											) : (
												<Navigate to={rc.data.to} />
											)
										}
										key={j}
									/>
								);
							})}
						</Route>
					);
				})}
			</Routes>
		</div>
	);
};

export default App;
