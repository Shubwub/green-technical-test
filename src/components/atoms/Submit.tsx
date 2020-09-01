import React from 'react';

export default function Submit({
	id,
	submit,
	email,
}: {
	id: string;
	email: string;
	submit: (email: string) => void;
}) {
	return (
		<button id={id} onClick={() => submit(email)}>
			Sign In
		</button>
	);
}
