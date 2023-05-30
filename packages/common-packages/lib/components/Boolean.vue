<template>
  <div class="btn-boolean">
    <CommonBtn :class="['btn-false', 'danger', {'line':modelValue === props.val?.[0]}]" @click="setBoolean(false)">{{ name[1] }}</CommonBtn>
    <CommonBtn :class="['btn-true', 'primary', {'line':modelValue === props.val?.[1]}]" @click="setBoolean(true)">{{ name[0] }}</CommonBtn>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
    name: {
        type: Array,
        default: ['True', 'False']
    },
    val: {
        type: Array,
        default: [true, false]
    },
    modelValue: {
      type: Boolean,
      required: true
    }
})
const emit = defineEmits(['update:modelValue'])
function setBoolean (val) {
    emit('update:modelValue', props.val?.[val?0:1])
}
</script>

<style scoped lang="scss">
.btn-boolean { display:flex;}
.btn-false { border-radius:.3em 0 0 .3em;}
.btn-true { border-radius:0 .3em .3em 0;}
</style>
