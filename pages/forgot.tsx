import type { NextPage } from 'next';
import Link from 'next/link';

import { InputText, Button, PageHead } from '../components';

const Forgot: NextPage = () => {
	return (
		<>
			<PageHead title="Forgot Password" description="System of Delivery" />
			<div className="h-screen flex flex-col lg:flex-row">
				<div className="bg-indigo-100 md:basis-full lg:basis-4/12 rounded-r-3xl">
					[image]
				</div>
				<div className="lg:basis-8/12 flex">
					<div className="max-w-2xl min-2xl w-4/5 m-auto">
						<h1 className="font-bold text-4xl mb-3">Forgot password?</h1>
						<p className="text-slate-700 mb-14">
							Please enter your email address to continue
						</p>
						<InputText
							label="Email address"
							type="email"
							placeholder="Enter your email"
						/>
						<Button className="bg-indigo-600 w-full p-4 text-white text-2xl">
							Continue
						</Button>
						<div className="block text-center p-6">
							<Link href="/signin">
								<a className="mt-6 text-slate-600 mb-6 hover:text-slate-900">
									Go back
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Forgot;
