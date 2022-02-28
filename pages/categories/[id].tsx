import Head from 'next/head';
import React from 'react';

import { Highlights, Navbar, Sidebar } from '../../components';
import { TypeParams, TypeProps } from './types';

async function getServerSideProps({ params: { id } }: TypeParams) {
	return { props: { id } };
}

function Categories({ ...props }: TypeProps) {
	return (
		<>
			<Head>
				<title>{props.id} - Restaurant Category</title>
				<meta name="description" content="List of category restaurants" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container m-auto flex">
				<Sidebar />
				<div className="grow p-8">
					<Navbar />
					<Highlights title={props.id} />
				</div>
			</div>
		</>
	);
}

export { getServerSideProps };

export default Categories;
