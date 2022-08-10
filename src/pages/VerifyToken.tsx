import { useAsync, useAsyncFn } from '@/hooks/useAsync';
import { useAppDispatch } from '@/hooks/useReducer';
import { setCredential } from '@/redux/authSlice';
import { getProfile } from '@/services/auth.service';
import { useNavigate, useParams } from 'react-router-dom';

const VerifyToken = () => {
	const { token, remember } = useParams();
	const { value, loading, error } = useAsync(
		() => getProfile(token!),
		[token!]
	);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	console.log(remember);
	if (value) {
		const credential = {
			token,
			remember: JSON.parse(remember!),
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
