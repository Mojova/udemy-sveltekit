export const load = async () => {
	const products = await (await import('$lib/dummy-products.json')).default;
	return { products };
};
