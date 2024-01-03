import type { PageLoad } from './$types';

export const load: PageLoad = ({ data, fetch }) => {
	fetch('https://dummyjson.com/products')
	fetch('https://dummyjson.com/users');
	return { products: data.products, title: 'Products' };
};
