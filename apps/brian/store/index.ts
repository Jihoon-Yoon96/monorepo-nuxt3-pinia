import {defineStore} from "pinia";

export const useIndexStore = defineStore('index', () => {
    // state
    const value1 = ref<number>(0)
    const value2 = ref<number>(0)
    const text = ref<string>('store 테스트 문구')

    const state = {
        value1 : ref<number>(0),
        text : ref<string>('pinia 테스트 문구')
    }

    //action
    function changeText(msg : string){
        text.value = msg
    }

    function add(){
        value1.value++
    }

    //getter
    const combinedValue = computed(() => {
        return value1.value + value2.value
    })

    return {state, text,changeText, add, value1, combinedValue}
})