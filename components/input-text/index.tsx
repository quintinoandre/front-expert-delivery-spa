import React from 'react';

type Props = {
	label: string;
	type: string;
	placeholder: string;
};

function InputText({ ...props }: Props) {
	return (
		<div className="flex mb-14">
			<div className="bg-indigo-100 w-16 mr-7 flex">
				<span className="bg-indigo-700 w-7 h-7" />
			</div>
			<div>
				<label className="text-xs font-bold uppercase tracking-wider text-gray-700">
					{props.label}
				</label>
				<input
					type={props.type}
					placeholder={props.placeholder}
					className="w-full py-3 border-b"
				/>
			</div>
		</div>
	);
}

export { InputText };
