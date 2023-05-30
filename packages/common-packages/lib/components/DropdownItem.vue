<template>
  <li>
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
defineProps({
    value: String
})
</script>

<style scoped lang="scss">
li { padding:0 1rem; background-color:var(--background-highlight); line-height:2em; cursor:default;
  &:hover { background-color:var(--background-normal-alt);}
}
</style>
