<template>
    <div class="dimmed">
      <div class="popup">
        <slot />
      </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.dimmed { position:fixed; top:0; bottom:0; left:0; right:0; display:flex; justify-content:center; align-items:center; background-color:var(--overlay-color);
  .popup { max-height:calc(100% - 60px); background-color:var(--background-normal); color:var(--foreground-normal); overflow:auto;}
}
</style>
