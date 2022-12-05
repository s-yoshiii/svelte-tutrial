<script>
    import {link} from 'svelte-spa-router'
    let pageName = "Home";
</script>

<h1>{pageName} page.</h1>
<a use:link={{href:"/about"}}>About</a>
