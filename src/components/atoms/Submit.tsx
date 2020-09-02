import React from 'react';
import style from './Submit.module.scss';

export default function Submit({ id }: { id: string }) {
	return (
		<button id={id} data-cy={`${id}-cy`} className={style.submitBtn}>
			Sign In
		</button>
	);
}
