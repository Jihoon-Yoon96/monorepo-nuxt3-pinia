/** Popup 관련 Store **/
import {defineStore} from "pinia";
export const usePopupStore = defineStore('popup', {
    state: () => {
        return {
            popupArr: <{name:string,param:object,comp:any}[]>[]
        }
    },
    actions: {
        addPopup (popup:{name:string,param:object,comp:any}) {
            this.popupArr.push(popup)
        },
        closePopup () {
            this.popupArr.pop() // 임시
        }
    }
})
