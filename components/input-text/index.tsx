import React from 'react';

import Styles from './styles.module.css';

type Props = {
	label: string;
	type: string;
	placeholder: string;
};

function InputText({ ...props }: Props) {
	return (
		<div className={Styles.container}>
			<div className={Styles.icon}>
				{/* <InputIcon size={24} color="#503E9D" /> */}
			</div>
			<div className="grow">
				<label className={Styles.label}>{props.label}</label>
				<input
					type={props.type}
					placeholder={props.placeholder}
					className={Styles.input}
				/>
			</div>
		</div>
	);
}

export { InputText };
