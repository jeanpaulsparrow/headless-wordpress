import { BASE_URL, POSTS_API_URL } from "$lib/variables";

export const get = async(request) => {
    const id = request.params.id;
    const res = await fetch(`${BASE_URL}${POSTS_API_URL}${id}`);
    const post = await res.json();
    
    return {
        status: 200,
        body: post
    }
}