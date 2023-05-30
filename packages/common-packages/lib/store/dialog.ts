import {defineStore} from "pinia";

/** Dialog 관련 Store **/
export const useDialogStore = defineStore('dialog', {
    state: () => {
        return {
            param: <object|null>null,
            modal: <object|null>null
        }
    },
    actions: {
        open (param:{
            type: string,
            title?: string,
            msg: string
        }) {
            const _this = this
            return new Promise(resolve => {
                this.param = {
                    ...param,
                    close (result?:any) {
                        resolve(result)
                        _this.close()
                    }
                }
            })
        },
        close () {
            this.param = null
        }
    }
});
