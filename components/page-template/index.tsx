import React from 'react';

import { Navbar } from '../navbar';
import { PageHead } from '../page-head';
import { Sidebar } from '../sidebar';
import { TypeProps } from './types';

function PageTemplate({ ...props }: TypeProps) {
	return (
		<>
			<PageHead
				title={props.title}
				description={props.description}
				keywords={props.keywords}
			/>
			<div className="container m-auto flex">
				<Sidebar />
				<div className="grow p-8">
					<Navbar />
					{props.children}
				</div>
			</div>
		</>
	);
}

export { PageTemplate };
