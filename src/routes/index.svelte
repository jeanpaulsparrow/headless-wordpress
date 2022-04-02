<script context="module">
    export const load = async({ fetch }) => {
        const res = await fetch("/api/posts.json");
        const posts = await res.json();

        return {
            props: {
                posts
            }
        }
    }
    
</script>
<script>
export let posts
</script>

{#each posts as post}
    <h2>{post.title.rendered}</h2>
    <p>{@html post.excerpt.rendered}</p>
    <a href="{`/posts/${post.id}`}">Read more</a>
{/each}