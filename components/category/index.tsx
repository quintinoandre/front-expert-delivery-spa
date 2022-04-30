import Link from 'next/link';

import { IconBase } from '../icon';
import Styles from './styles.module.css';
import { TypeProps } from './types';

function Category({ ...props }: TypeProps) {
	return (
		<Link href={`/categories/${props.id}`}>
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
