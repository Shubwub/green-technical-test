import React from 'react';

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
		<>
			<label htmlFor={name}>Email Address</label>
			<input
				name={name}
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
		</>
	);
}
