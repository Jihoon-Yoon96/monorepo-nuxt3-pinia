/** AppOption 관련 Store **/
import {defineStore} from "pinia";
export const useAppOptionStore = defineStore({
    id: "appOption",
    state: () => {
        return {
            themeClass: 'auto',
            openContInfoBar: false
        }
    },
    getters: {
        // transContentClass: (state) => state.appContentClass + '!!trans'
    },
    actions: {
        setTheme (theme:string) {
            this.themeClass = theme
            localStorage.setItem('act-theme', theme)
        }
    }
});
