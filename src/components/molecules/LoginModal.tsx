import React, { useState, useEffect } from 'react';
import { EmailInput, Checkbox, Submit } from '../atoms';
import { postLogin } from '../../services/api/login';
import { useToasts } from 'react-toast-notifications';

import style from './LoginModal.module.scss';

export default function LoginModal() {
	const { addToast } = useToasts();
	const [email, setEmail] = useState<string>('');
	const [remember, setRemember] = useState<boolean>(false);

	const login = async (email: string) => {
		const loginAttempt = await postLogin(email);
		if (loginAttempt.error) {
			addToast(loginAttempt.error, { appearance: 'error' });
		} else {
			addToast(loginAttempt.success, { appearance: 'success' });
		}
	};

	useEffect(() => {
		const email = localStorage.getItem('email');
		const remembering = localStorage.getItem('remembering');
		if (remembering && email) {
			setRemember(true);
			setEmail(email);
		}
	}, []);

	const rememberUser = () => {
		localStorage.setItem('email', email);
		localStorage.setItem('remembering', 'true');
	};

	const forgetUser = () => {
		localStorage.removeItem('email');
		localStorage.removeItem('remembering');
	};

	useEffect(() => {
		remember ? rememberUser() : forgetUser();
	}, [remember]);

	return (
		<div className={style.loginModal}>
			<img
				src={'https://green.cdn.energy/branding/logo-r.svg'}
				alt="Green logo"
			/>
			<h1>Example login screen</h1>
			<h2>Getting started with Green.</h2>
			<EmailInput name="email" email={email} setEmail={setEmail} />
			<Checkbox
				name="device-checkbox"
				label="Remember this device"
				checked={remember}
				setChecked={setRemember}
			/>
			<Submit id="sign-in" submit={login} email={email} />
		</div>
	);
}
