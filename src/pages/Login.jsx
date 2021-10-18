import React from 'react';
import axios from '../config/axios.config';
import { API_ENDPOINTS } from '../constants/api';
import { GOOGLE_CLIENT_ID } from '../constants/envs';
import GoogleLogin from 'react-google-login';

import { useDispatch } from 'react-redux';

import { login, logout, useLoginState } from '../redux';
import myLog from '../utils/myLog';
import { GoogleIcon } from '../assests/icons';

const Login = () => {
	const loginState = useLoginState();
	const dispatch = useDispatch();

	const onGoogleLogin = data => {
		console.log(data);
	};

	return (
		<div className='flex items-center h-screen justify-center'>
			<GoogleLogin
				clientId={GOOGLE_CLIENT_ID}
				onSuccess={onGoogleLogin}
				onFailure={() => {}}
				render={props => (
					<button
						className='flex items-center gap-2 border rounded px-3 py-1 bg-gray-200 shadow hover:bg-gray-300 transition-colors'
						onClick={props.onClick}
						disabled={props.disabled}
					>
						<GoogleIcon height='28px' width='28px' />
						<span className='text-xl text-gray-700'>Sign in with Google</span>
					</button>
				)}
			/>
		</div>
	);
};

export default Login;
