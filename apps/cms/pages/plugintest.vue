<template>
    <h2>common componets</h2>
    <common-btn>윤지훈입니다</common-btn>
    <br>
    --------------------<br>
    <h2>vue-i18n plugin</h2>
    <h1>{{ $t('hello', {name: 'vue-i18n'}) }}</h1>
    --------------------<br>
    <h2>dayjs plugin</h2>
    <p>{{ $d(new Date(), 'short') }}</p>
    <p>{{ $d(new Date(), 'long') }}</p>
    <p>{{ $d(new Date(), 'time') }}</p>
    --------------------<br>
    <h2>dialog plugin</h2>
    <button type="button" @click="dialog2('alert')">Alert</button>
    <button type="button" @click="dialog2('confirm')">confirm</button>

</template>

<script setup lang="ts">
import {useDialogStore} from "../../../packages/common-packages/lib/store/dialog";

const { $alert, $confirm } = useNuxtApp()
console.log('nuxtApp', useNuxtApp())

const dialog = useDialogStore()
console.log(dialog)

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

function dialog2 (type:string) {
    if (type === 'alert') {
        $alert({title: '얼럿', msg: '얼럿 문구'})
    } else {
        $confirm({title: '컨펌', msg: '컨펌 문구'})
    }
}
</script>

<style scoped>

</style>