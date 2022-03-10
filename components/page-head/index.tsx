import Head from 'next/head';
import React from 'react';

type PageHeadProps = {
	title: string;
	description?: string;
	keywords?: string;
};

function PageHead({ ...props }: PageHeadProps) {
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
