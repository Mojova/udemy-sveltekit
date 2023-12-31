import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({fetch}) => {

	const response = await fetch('/api/products');

	if (response.ok) {
		return {
			products: response.json()
		}
	}
	throw error(response.status, response.statusText);
};
