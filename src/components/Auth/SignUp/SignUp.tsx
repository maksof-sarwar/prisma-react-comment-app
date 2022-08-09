import { useState } from 'react';
import './SignUp.scss';
import { Button, Checkbox, Form, Input } from 'antd';

import { useAsyncFn } from '@/hooks/useAsync';
import { signUpApi } from '@/services/auth.service';
import { ISignUp } from '@/models/auth.model';
import { useNavigate } from 'react-router-dom';
function SignIn() {
	const { loading, execute, error, value } = useAsyncFn(signUpApi);
	const navigate = useNavigate();
	return (
		<>
			<h3>Sign Up</h3>
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
							navigate('/auth/sign-in');
						});
					}}
					autoComplete='on'>
					<Form.Item
						name='name'
						hasFeedback
						label='Name'
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
						rules={[
							{
								required: true,
								message: 'Please input your name.',
							},
						]}>
						<Input placeholder='Name' size='large' />
					</Form.Item>
					<Form.Item
						name='email'
						hasFeedback
						label='Email address'
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
						rules={[
							{
								required: true,
								message: 'Please input your email.',
							},
							{
								type: 'email',
								message: 'Your email is invalid.',
							},
						]}>
						<Input placeholder='Email' size='large' />
					</Form.Item>

					<Form.Item
						name='password'
						hasFeedback
						label='Password'
						labelCol={{ span: 24 }}
						wrapperCol={{ span: 24 }}
						rules={[
							{
								required: true,
								message: 'Please input your password.',
							},
							{ min: 6, message: 'Password must be minimum 6 characters.' },
						]}>
						<Input.Password placeholder='Password' size='large' />
					</Form.Item>
					<div className='signin-button'>
						<Button type='primary' htmlType='submit' shape='round' size='large'>
							Sign Up
						</Button>
					</div>
					{error ? <h1>{JSON.stringify(error)}</h1> : null}
				</Form>
			)}
		</>
	);
}

export default SignIn;
