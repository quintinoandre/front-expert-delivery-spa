import type { NextPage } from 'next';
import Link from 'next/link';

import { Button, InputText, PageHead } from '../components';

const Signup: NextPage = () => {
	return (
		<>
			<PageHead title="Sign Up" description="System of Delivery" />
			<div className="h-screen flex flex-col lg:flex-row">
				<div className="bg-indigo-100 md:basis-full lg:basis-4/12 rounded-r-3xl">
					[image]
				</div>
				<div className="lg:basis-8/12 flex">
					<div className="max-w-2xl min-2xl w-4/5 m-auto">
						<h1 className="font-bold text-4xl mb-3">Create an account</h1>
						<p className="mb-14">
							Please create an account to continue using our service
						</p>
						<InputText
							label="Full Name"
							type="text"
							placeholder="Enter your full name"
						/>
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
						<Button className="bg-indigo-600 w-full p-4 text-white text-2xl">
							Create an account
						</Button>
						<p className="mt-6 text-center text-slate-700 mb-14">
							Already have an account?{' '}
							<Link href="/signin">
								<a className="mt-6 text-orange-600 font-bold hover:text-orange-900">
									Sign In
								</a>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
