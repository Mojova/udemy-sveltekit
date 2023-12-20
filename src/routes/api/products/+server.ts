import { json, error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({fetch}) => {
    const response = await fetch('https://dummyjson.com/products');
    if (response.ok) {
        const responseJson = await response.json();
        return json(responseJson, {status: 200})
    }
    throw error(response.status, response.statusText)
}

export const POST: RequestHandler = async ({request}) => {
    const product = await request.json();
    if (!product.title) {
        throw error(400, 'Product title is required')
    }

    return json({id: 123, title: product.title})
}