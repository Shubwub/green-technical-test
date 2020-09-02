import React from 'react';
import style from './Checkbox.module.scss';

export default function Checkbox({
	name,
	label,
	checked,
	setChecked,
}: {
	name: string;
	label: string;
	checked: boolean;
	setChecked: (checked: boolean) => void;
}) {
	return (
		<label htmlFor={name} className={style.label}>
			<input
				name={name}
				id={name}
				data-cy={`${name}-cy`}
				type="checkbox"
				checked={checked}
				onChange={() => setChecked(!checked)}
        className={style.input}
        tabIndex={-1}
			/>
			<span className={style.checkbox} tabIndex={0}></span>
			{label}
		</label>
	);
}
