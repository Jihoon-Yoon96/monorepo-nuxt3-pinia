<template>
    <h2>vue-i18n plugin</h2>
    <h1>{{ $t('hello', {name: 'vue-i18n'}) }}</h1>
    --------------------<br>
    <h2>dayjs plugin</h2>
    <p>{{ $d(new Date(), 'short') }}</p>
    <p>{{ $d(new Date(), 'long') }}</p>
    <p>{{ $d(new Date(), 'time') }}</p>

</template>

<script setup lang="ts">
// import {useDialogStore} from "~/store/dialog";
//
// const dialog = useDialogStore()
// console.log(dialog)

const textVal = ref('텍스트')
const selectVal = ref('a')
const boolVal1 = ref(false)
const boolVal2 = ref('N')
const checkedNames = ref([])
const RadioVal = ref('One')

const selectOption = ref<{label:String, value:String}[]>([
    { label:'항목1', value:'a' },
    { label:'항목2', value:'b' },
    { label:'항목3', value:'c' }
])

function changeEvent (val) {
    console.log(val)
}
</script>

<style scoped>

</style>