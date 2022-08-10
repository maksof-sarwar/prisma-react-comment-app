import { Routes, Route, Link, Navigate } from 'react-router-dom';
import RouteArray from './Routes';
import { IRoute } from './models/route.model';
import AuthGuard from '@/guard/auth.guard';

const App = () => {
	return (
		<div>
			<Routes>
				{RouteArray.map((route: IRoute, i: number) => {
					console.log(route.path);
					return (
						<Route
							key={i}
							path={route.path}
							element={
								route.component ? (
									route.data ? (
										<AuthGuard
											component={route.component}
											isPrivate={route.data.private}
										/>
									) : (
										<route.component />
									)
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
												route.data ? (
													<AuthGuard
														component={rc.component}
														isPrivate={route.data.private}
													/>
												) : (
													<rc.component />
												)
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
