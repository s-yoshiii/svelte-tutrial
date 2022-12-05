<script>
    import {link} from 'svelte-spa-router';
    let count = 0;
    const handleClick = () => {
        count++;
    }
</script>
<h1>About page.</h1>
<a href="/" use:link>Home</a><br>
<button class="btnTypeA" on:click={handleClick}><span class="btnTypeA__inner">Clicked {count} {count === 1 ? 'time' : 'times'}</span></button>

<style lang="scss">
.btnTypeA{
    background: red;
    &__inner{
        color: #fff;
    }
}
</style>
