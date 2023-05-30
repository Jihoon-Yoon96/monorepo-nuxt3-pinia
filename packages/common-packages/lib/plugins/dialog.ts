import {useDialogStore} from "../../store/dialog";
import { createPinia } from 'pinia'

const pinia = createPinia()
// app.use(pinia)
useNuxtApp(pinia)

/**
 * const { $alert, #$confirm } = useNuxtApp()
 * - Simple
 * $alert('Alert Title')
 * $confirm('Confirm Title')
 * - Standard
 * $alert({title: 'Alert Title', msg: 'Alert Description'})
 * $confirm({title: 'Confirm Title', msg: 'Alert Description'})
 * */
export default defineNuxtPlugin((nuxtApp) => {
    /** alert / confirm */
    const dialog = useDialogStore()
    nuxtApp.provide('alert', (param: {
        title: string,
        msg: string
    } | string)=>{
        return dialog.open({
            type: 'alert',
            ...typeof param === 'object' ? param : { title:'Alert', msg:param }
        })
    })
    nuxtApp.provide('confirm', (param: {
        title: string,
        msg: string
    } | string)=>{
        return dialog.open({
            type: 'confirm',
            ...typeof param === 'object' ? param : { title:'Confirm', msg:param }
        })
    })
})
