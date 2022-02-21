import Link from 'next/link';
import React from 'react';

import { IconBase } from '../icon';
import Styles from './styles.module.css';

type CategoryProps = {
	name: string;
	legend: string;
	iconName: string;
	backgroundSection: string;
};

function Category({ ...props }: CategoryProps) {
	return (
		<Link href="/category">
			<a className={Styles.card}>
				<div
					className={Styles.icon}
					style={{ backgroundColor: props.backgroundSection }}
				>
					<IconBase iconName={props.iconName} color="white" />
				</div>
				<h3>{props.name}</h3>
				<p>{props.legend}</p>
			</a>
		</Link>
	);
}

export { Category };
