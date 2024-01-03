import type { Handle, HandleFetch, HandleServerError } from "@sveltejs/kit";

export const handle: Handle = async ({event, resolve}) => {
    const {locals, cookies, url} = event;

    if (!url.pathname.startsWith('/api')) {
        const token = cookies.get('token');

        locals.user = token ? {name: 'John', id: 1} : undefined;
    }

    const response = await resolve(event);

    return response;
}

export const handleFetch: HandleFetch = ({request, event, fetch}) => {
    if (request.url.startsWith('/https://dummyjson.com/')) {
        const cookie = event.request.headers.get('cookie');
        if (cookie) {
            request.headers.set('cookie', cookie);
        }
    }
    return fetch(request, )
}

export const handleError: HandleServerError = ({error, event}) => {
    console.log('This is coming from handleError');
    console.log(error, event);

    return {
        message: "An unexpected error has occured.",
        code: 'UNEXPECTED'
    }
}
