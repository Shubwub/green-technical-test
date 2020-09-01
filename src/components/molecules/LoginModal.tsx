import React, { useState } from 'react';
import { EmailInput, Checkbox, Submit } from '../atoms';
import './LoginModal.scss';
import { postLogin } from '../../services/api/login';

export default function LoginModal() {
	const [email, setEmail] = useState<string>('');
	const [remember, setRemember] = useState<boolean>(false);

	const login = async (email: string) => {
		const thing = await postLogin(email);
		console.log(thing);
	};

	return (
		<div className="login-modal">
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
