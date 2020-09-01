import React, { useState } from 'react';
import { EmailInput, Checkbox, Submit } from '../atoms';
import './LoginModal.scss';

export default function LoginModal() {
	const [email, setEmail] = useState<string>('');
	const [remember, setRemember] = useState<boolean>(false);

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
			<Submit id="sign-in" />
		</div>
	);
}
