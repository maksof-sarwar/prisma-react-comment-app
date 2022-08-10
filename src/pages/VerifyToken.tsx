import { useAsync } from '@/hooks/useAsync';
import { useAppDispatch } from '@/hooks/useReducer';
import { setCredential } from '@/redux/authSlice';
import { getProfile } from '@/services/user.service';
import { useNavigate, useParams } from 'react-router-dom';

const VerifyToken = () => {
	const { value, loading, error } = useAsync(getProfile);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { token, remember } = useParams();
	console.log(token, remember);
	if (value) {
		const credential = {
			token,
			remember,
			...(value as object),
		};
		dispatch(setCredential(credential));
		navigate('/');
	}
	return (
		<>
			<h1>Verifying</h1>
		</>
	);
};
export default VerifyToken;
