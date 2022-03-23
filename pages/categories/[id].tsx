import React from 'react';

import { Highlights, PageTemplate } from '../../components';

type TypeParams = { params: { id: string } };

type TypeProps = { id: string };

async function getServerSideProps({ params: { id } }: TypeParams) {
	return { props: { id } };
}

function Categories({ ...props }: TypeProps) {
	return (
		<PageTemplate
			title={`${props.id} - Restaurant Category`}
			description="List of category restaurants"
		>
			<Highlights title={props.id} />
		</PageTemplate>
	);
}

export { getServerSideProps };

export default Categories;
