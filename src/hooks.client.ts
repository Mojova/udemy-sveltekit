import type { HandleClientError } from "@sveltejs/kit";

export const handleError: HandleClientError = ({error, event}) => {
    console.log('This is coming from handleError');
    console.log(error, event);

    return {
        message: "An unexpected error has occured.",
        code: 'UNEXPECTED'
    }
}
