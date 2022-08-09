import { useEffect } from 'react';
import { useAppSelector } from '@/hooks/useReducer';
import { selectCredential } from '@/redux/authSlice';
import { useNavigate } from 'react-router-dom';

function AuthGuard({ component: Component, isPrivate }) {
	const credential = useAppSelector(selectCredential);
	const navigate = useNavigate();
	useEffect(() => {
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
