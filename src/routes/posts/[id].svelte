<script context="module">
    export const load = async({ params,  fetch }) => {
        const id = params.id;
        const res = await fetch(`/api/posts/${id}.json`);
        const post = await res.json();

        return {
            props: {
                post
            }
        }
    }
    
</script>
<script>
    export let post
</script>

<h1>{@html post.title.rendered}</h1>
<p>{@html post.content.rendered}</p>