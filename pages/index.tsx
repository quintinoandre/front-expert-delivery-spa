import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<h1>Home</h1>
				<Link href="/signup">
					<a>Signup</a>
				</Link>
				<Link href="/signin">
					<a>Signin</a>
				</Link>
			</div>
		</>
	);
};

export default Home;
