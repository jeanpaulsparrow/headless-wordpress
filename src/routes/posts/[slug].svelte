<script context="module">
    export const load = async({ params,  fetch }) => {
        const slug = params.slug;
        const res = await fetch(`/api/posts/${slug}.json`);
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
<img src="{post.image}" alt="{post.title.rendered}" />
<p>{@html post.content.rendered}</p>