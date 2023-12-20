import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({params, fetch}) => {
    const productRes = await fetch(`https://dummyjson.com/products/${params.id}`);

    if (!productRes.ok) {
        throw error(productRes.status, productRes.statusText);
    }

    const product = await productRes.json();

    const comments = fetch('https://dummyjson.com/comments').then((res) => res.json())

    return {
        product,
        title: product.title,
        description: product.description,
        nested: {
            comments,
        }
    }
    
}