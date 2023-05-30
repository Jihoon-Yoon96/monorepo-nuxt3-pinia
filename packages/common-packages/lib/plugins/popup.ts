import {usePopupStore} from "../store/popup";

export default defineNuxtPlugin((nuxtApp) => {
    const popupStore = usePopupStore()
    /** Popup */
    nuxtApp.provide('openPopup', async (popup:any) => {
        let res = {
            name: <string>'',
            param: <object>{},
            comp: <any>undefined
        }
        if (typeof popup === 'object') {        // with param

            res = {...popup}
        } else {                                // only name
            res.name = popup
        }
        res.comp = (await import(`@/components/popup/${res.name}.vue`)).default

        return popupStore.addPopup(res)
    })

    nuxtApp.provide('closePopup', () => {
        return popupStore.closePopup()
    })
})
