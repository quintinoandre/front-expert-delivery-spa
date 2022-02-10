import React from 'react';

import { IconBase } from '../icon';
import Styles from './styles.module.css';

type Props = {
	name: string;
	legend: string;
	iconName: string;
};

function Category({ ...props }: Props) {
	return (
		<div className={Styles.card}>
			<div>
				<IconBase iconName={props.iconName} />
			</div>
			<h3>{props.name}</h3>
			<p>{props.legend}</p>
		</div>
	);
}

export { Category };
