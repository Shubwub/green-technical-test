import React from 'react';
import style from './Submit.module.scss'

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
		<button id={id} onClick={() => submit(email)} className={style.submitBtn}>
			Sign In
		</button>
	);
}
