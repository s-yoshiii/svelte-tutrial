<script>
  import CircleButton from "../component/CircleButton.svelte";
  let m = { x: 0, y: 0 };

  function handleMousemove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }
  function handleMessage(event) {
    alert(event.detail.text);
  }
</script>

<CircleButton on:showText={handleMessage} />
<div class="container" on:mousemove={handleMousemove}>
  The mouse position is {m.x} x {m.y}
</div>

<style>
  .container {
    width: 500px;
    height: 500px;
    padding: 10%;
    background-color: bisque;
    text-align: left;
  }
</style>
