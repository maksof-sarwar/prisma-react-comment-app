import { useEffect } from 'react';
import { useAppSelector } from '@/hooks/useReducer';
import { selectCredential } from '@/redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { useAsync } from '@/hooks/useAsync';
import { getProfile } from '@/services/user.service';

function AuthGuard({ component: Component, isPrivate }) {
	const credential = useAppSelector(selectCredential);
	const navigate = useNavigate();
	useEffect(() => {
		if (!credential && isPrivate) {
			navigate('auth/sign-in');
		} else if (credential && !isPrivate) {
			navigate(`/verify-token/${credential?.token}`);
		}
	}, [credential]);

	return (
		<>
			<Component />
		</>
	);
}

export default AuthGuard;
