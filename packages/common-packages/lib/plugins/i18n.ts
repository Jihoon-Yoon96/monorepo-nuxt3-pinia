import { createI18n } from 'vue-i18n'
import en from '../sheets/locales/en/index'
import ko from '../sheets/locales/ko/index'

export default defineNuxtPlugin((nuxtApp) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'ko',
        messages: { ko, en },
        datetimeFormats: {
            'en': {
                short: { year: 'numeric', month: 'short', day: 'numeric'},
                long: {
                    year: 'numeric', month: 'short', day: 'numeric',
                    weekday: 'short', hour: 'numeric', minute: 'numeric'
                },
                time: {hour: '2-digit', minute: '2-digit', second: '2-digit'}
            },
            'ko': {
                short: { year: 'numeric', month: 'short', day: 'numeric'},
                long: {
                    year: 'numeric', month: 'short', day: 'numeric',
                    weekday: 'short', hour: 'numeric', minute: 'numeric'
                },
                time: {hour: '2-digit', minute: '2-digit', second: '2-digit'}
            }
        }
    })
    nuxtApp.vueApp.use(i18n)
    nuxtApp._i18n = i18n
})
