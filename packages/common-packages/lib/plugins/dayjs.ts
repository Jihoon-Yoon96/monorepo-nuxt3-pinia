import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import 'dayjs/locale/en'
import enLocales from '../sheets/locales/en/index'
import koLocales from '../sheets/locales/ko/index'


export default defineNuxtPlugin (nuxtApp => {
    console.log('dayjs')
    dayjs.locale('ko')

    dayjs.extend(relativeTime)
    dayjs.extend(updateLocale)

    dayjs.updateLocale('ko',koLocales.dateLocale)
    dayjs.updateLocale('en',enLocales.dateLocale)

    nuxtApp.provide('dayjs', dayjs)
})
