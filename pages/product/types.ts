type TypeParams = { params: { id: string } };

type TypeProps = {
	id: string;
	product: {
		name: string;
		imageUrl: string;
		deliveryFee: string;
		rate: number;
		reviews: number;
		category: string;
		deliveryTime: string;
	};
};

export type { TypeParams, TypeProps };
