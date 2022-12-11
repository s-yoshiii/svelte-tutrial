<script>
    import {link} from 'svelte-spa-router';
    import Button from '../component/Button.svelte';
    let pageName = "Home";
    const getConirmedNumber = async() => {
        try{
            const res = await fetch('https://api.covid19api.com/dayone/country/japan/status/confirmed');
            const json = await res.json();
            const latest = await json[json.length - 1];
            const cases = await latest.Cases;
            return cases;
        } catch(err){
            console.log(err);
            throw new Error(err);
        }
    }
   let promise = getConirmedNumber();
   function handleClick(){
    promise = getConirmedNumber();
   }
</script>

<h1>{pageName} page.</h1>
<Button buttonText={"API取得"} on:click={handleClick} />

{#await promise}
<p>...waiting</p>
{:then number}
<p>The number is {number}</p>
{:catch error}
<p>The error is {error}</p>
{/await}
<div>
    <a use:link={{href:"/about"}}>About</a>
</div>
