import { ReactNode } from 'react';

type TypeProps = {
	children: ReactNode | ReactNode[];
	title: string;
	description?: string;
	keywords?: string;
};

export type { TypeProps };
