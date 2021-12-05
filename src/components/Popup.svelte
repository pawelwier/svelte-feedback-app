<script>

</script>

<div class="popup-wrapper">
  <slot />
</div>

<style>
  .popup-wrapper {
    position: absolute;
    top: 150px;
    border: 2px rgb(81, 83, 86) solid;
    left:25%;
    width: 50%;
    min-width: 200px;
    background-color: rgb(211, 216, 223);
    border-radius: 10px;
    padding: 10px 20px;
    z-index: 9999;
  }
</style>