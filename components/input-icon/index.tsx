import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

type Props = {
	size?: number;
	color?: string;
	title?: string;
};

function InputIcon({ ...props }: Props) {
	return (
		<AiOutlineMail size={props.size} color={props.color} title={props.title} />
	);
}

export { InputIcon };
