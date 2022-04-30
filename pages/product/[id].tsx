import { FoodItem, PageTemplate } from '../../components';

type TypeParams = { params: { id: string } };

type TypeProps = {
	id: string;
	product: {
		id: string;
		name: string;
		imageUrl: string;
		deliveryFee: string;
		rate: number;
		reviews: number;
		category: string;
		deliveryTime: string;
	};
};

async function getServerSideProps({ params: { id } }: TypeParams) {
	return {
		props: {
			id,
			product: {
				id,
				name: 'Gigantic Rodeo Burger',
				imageUrl: '/foods/burger.jpg',
				deliveryFee: '2.99 Delivery',
				rate: 4.3,
				reviews: 104,
				category: 'Burger',
				deliveryTime: '45 - 55 min',
			},
		},
	};
}

function Product({ ...props }: TypeProps) {
	return (
		<PageTemplate
			title={`${props.product.name} - Restaurant XPTO`}
			description={`Description of ${props.product.name} in Restaurant XPTO`}
			keywords={`${props.product.name}, Restaurant XPTO, Restaurant, XPTO`}
		>
			<FoodItem {...props.product} />
		</PageTemplate>
	);
}

export { getServerSideProps };

export default Product;
