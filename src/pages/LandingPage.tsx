import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
function LandingPage() {
	return (
		<>
			<Link to='auth/sign-in'>signin</Link>
		</>
	);
}

export default LandingPage;
