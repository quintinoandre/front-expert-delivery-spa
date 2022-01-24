import type { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { InputText, Button, PageHead } from '../components';

const Signin: NextPage = () => {
	return (
		<>
			<PageHead title="Sign In" description="System of Delivery" />
			<div className="h-screen flex flex-col lg:flex-row">
				<div className="bg-indigo-100 md:basis-full lg:basis-4/12 rounded-r-3xl">
					[image]
				</div>
				<div className="lg:basis-8/12 flex">
					<div className="max-w-2xl min-2xl w-4/5 m-auto">
						<h1 className="font-bold text-4xl mb-3">Welcome!</h1>
						<p className="text-slate-700 mb-14">
							Sign in to your account to continue
						</p>
						<InputText
							label="Email address"
							type="email"
							placeholder="Enter your email"
						/>
						<InputText
							label="Password"
							type="password"
							placeholder="Enter your password"
						/>
						<Button className="bg-indigo-200 w-full p-4 text-indigo-600 text-2xl">
							Sign in
						</Button>
						<div className="block text-center p-6">
							<Link href="/forgot">
								<a className="mt-6 text-slate-600 mb-6 hover:text-slate-900">
									Forgot password?
								</a>
							</Link>
						</div>
						<Link href="/signup">
							<a className="mt-6 bg-indigo-600 w-full text-center rounded-xl block p-4 text-white text-xl mb-6 hover:text-gray-300">
								Create an account
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signin;
