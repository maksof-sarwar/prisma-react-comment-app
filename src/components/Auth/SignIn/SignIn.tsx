import React, { useState } from 'react';
import './SignIn.scss';
import { Button, Checkbox, Form, Input } from 'antd';
import { Col, Row } from 'antd';
import { useNavigate, useRoutes } from 'react-router-dom';
import { useAsync, useAsyncFn } from '@/hooks/useAsync';
import { signInApi } from '@/services/auth.service';
import { ISignIn } from '@/models/auth.model';
import { useAppDispatch, useAppSelector } from '@/hooks/useReducer';
import { selectCredential, setCredential } from '@/redux/authSlice';
function SignIn() {
	const { loading, execute, error, value } = useAsyncFn(signInApi);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<>
			<h3>Sign in</h3>
			{loading ? (
				<h1>Loading</h1>
			) : (
				<Form
					name='signin'
					initialValues={{
						remember: false,
					}}
					onFinish={(value) => {
						execute(value).then((response) => {
							dispatch(setCredential(response));
							navigate(`/verify-token/${value.remember}/${response.token}`);
						});
					}}
					autoComplete='off'>
					<Form.Item
						name='email'
						label='Email address'
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}>
						<Input placeholder='Email' size='large' />
					</Form.Item>

					<Form.Item
						name='password'
						label='Password'
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}>
						<Input.Password placeholder='Password' size='large' />
					</Form.Item>

					<Form.Item>
						<Form.Item name='remember' valuePropName='checked' noStyle>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>

						<a className='login-form-forgot'>Forgot password?</a>
					</Form.Item>
					<div className='signin-button'>
						<Button type='primary' htmlType='submit' shape='round' size='large'>
							Sign In
						</Button>
					</div>
				</Form>
			)}
		</>
	);
}

export default SignIn;
