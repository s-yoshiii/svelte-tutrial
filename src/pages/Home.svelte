<script>
    import {link} from 'svelte-spa-router';
    import Button from '../component/Button.svelte';
    let pageName = "Home";
</script>

<h1>{pageName} page.</h1>
<Button buttonText={"リンク"} />
<a use:link={{href:"/about"}}>About</a>
