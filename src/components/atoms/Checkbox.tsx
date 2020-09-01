import React from 'react';

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
		<>
			<input
				name={name}
				type="checkbox"
				checked={checked}
				onChange={() => setChecked(!checked)}
			/>
			<label htmlFor={name}>{label}</label>
		</>
	);
}
