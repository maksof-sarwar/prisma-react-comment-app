import { useEffect, useState } from 'react';
import { useAppSelector } from '@/hooks/useReducer';
import { selectCredential } from '@/redux/authSlice';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import { ICredential } from '@/models/credential.model';

function AuthGuard({ component: Component, isPrivate }) {
	const credential = useAppSelector(selectCredential);
	const navigate = useNavigate();
	useEffect(() => {
		console.log(credential, isPrivate);
		if (!credential && isPrivate) {
			navigate('auth/sign-in');
		} else if (credential && !isPrivate) {
			navigate('/');
		}
	}, []);

	return (
		<>
			<Component />
		</>
	);
}

export default AuthGuard;
