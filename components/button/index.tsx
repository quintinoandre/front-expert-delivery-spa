import Styles from './styles.module.css';
import { TypeProps } from './types';

function Button({ ...props }: TypeProps) {
	return (
		<button className={`${props.className} ${Styles.button}`}>
			{props.children}
		</button>
	);
}

export { Button };
