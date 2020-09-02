import React, { useState, useEffect } from 'react';
import { EmailInput, Checkbox, Submit } from '../atoms';
import { postLogin } from '../../services/api/login';

import style from './LoginModal.module.scss';

export default function LoginModal() {
	const [email, setEmail] = useState<string>('');
	const [remember, setRemember] = useState<boolean>(false);

	const login = async (email: string) => {
		const thing = await postLogin(email);
		console.log(thing);
	};

	useEffect(() => {
		const email = localStorage.getItem('email');
		if (email) setEmail(email);
	}, []);

	useEffect(() => {
		remember
			? localStorage.setItem('email', email)
			: localStorage.removeItem('email');
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
