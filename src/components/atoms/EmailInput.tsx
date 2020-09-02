import React from 'react';
import style from './EmailInput.module.scss';

export default function EmailInput({
	name,
	email,
	setEmail,
}: {
	name: string;
	email: string;
	setEmail: (email: string) => void;
}) {
	return (
		<label htmlFor={name} className={style.label}>
			Email Address
			<input
				name={name}
        id={name}
        data-cy={`${name}-cy`}
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
        className={style.input}
        required
			/>
		</label>
	);
}
