import { useAppDispatch } from '@/hooks/useReducer';
import { resetCredential } from '@/redux/authSlice';
import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<>
			<Button
				onClick={() => {
					dispatch(resetCredential());
					navigate('auth');
				}}>
				Logout
			</Button>
		</>
	);
};
export default Dashboard;
