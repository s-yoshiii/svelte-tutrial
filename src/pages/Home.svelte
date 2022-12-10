<script>
    import {link} from 'svelte-spa-router';
    import Button from '../component/Button.svelte';
    let pageName = "Home";
    let promise;
    const getConirmedNumber = async() => {
        try{
            const res = await fetch('https://api.covid19api.com/dayone/country/japan/status/confirmed');
            const json = await res.json();
            const latest = await json[json.length - 1];
            const cases = await latest.Cases;
            console.log(cases)
        } catch(err){
            console.log(err);
        }
    }
   function handleClick(){
    promise = getConirmedNumber();
   }
</script>

<h1>{pageName} page.</h1>
<Button buttonText={"リンク"} on:click={handleClick} />

<a use:link={{href:"/about"}}>About</a>
