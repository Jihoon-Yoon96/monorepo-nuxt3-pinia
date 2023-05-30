<template>
  <div class="dropdown">
    <CommonBtn type="button" ref="$btn"
               @click="clickDropdown" v-click-outside="closeOption">
      <template v-if="button">{{ button }}</template>
      <slot v-else name="button" />
    </CommonBtn>
    <ul v-if="showFlag" class="dropdown-option" :style="optionStyle">
      <slot />
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps(['button'])

const showFlag = ref(false)
const $btn = ref(null)
const width = ref(0)

onMounted(()=>{
    width.value = $btn.value.$el.clientWidth
})

const optionStyle = computed(()=>{
    return {
        minWidth: `${width.value}px`
    }
})

function clickDropdown () {
    showFlag.value = !showFlag.value
}
function closeOption () {
    if (showFlag.value) showFlag.value = false
}
</script>

<style scoped lang="scss">
.dropdown { position:relative;}
.dropdown-option { position:absolute; box-shadow:var(--card-shadow); z-index:1;}
</style>
