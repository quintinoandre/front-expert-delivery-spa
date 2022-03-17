import Head from 'next/head';
import React from 'react';

import { TypeProps } from './types';

function PageHead({ ...props }: TypeProps) {
	return (
		<Head>
			<title>{props.title} - DeliveryApp FrontExpert</title>
			<meta name="description" content={props.description} />
			<meta name="keywords" content={props.keywords} />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}

export { PageHead };
