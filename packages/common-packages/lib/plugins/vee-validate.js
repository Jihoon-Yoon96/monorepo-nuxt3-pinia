import {defineRule, configure} from 'vee-validate';

import {required, email, min, confirmed } from "@vee-validate/rules/dist/vee-validate-rules";
import {Form, Field, ErrorMessage} from 'vee-validate'

export default defineNuxtPlugin((nuxtApp) => {
    console.log('vee-validate2')
    // console.log('@@@@@@@@@@@@@@@nuxtApp-pluginuxtApp-plugi@@@@@@@@@n', nuxtApp)
    const _i18n = nuxtApp._i18n.global

    defineRule('required', required);
    defineRule('min', min)
    defineRule('email', email)
    defineRule('pwdConfirmed', confirmed)

    defineRule('name', value =>{
        if(/[^(가-힣a-zA-Z\s_\-)]/.test(value)){
            return false
        }
        return true
    })
    defineRule('key', value=>{
        if(/[^(1-9a-zA-Z\s_\-)]/.test(value)){
            return false
        }
        return true
    })

    const generateMessage = (ctx) => {
        const {field, rule} = ctx;
        const params = rule.params;

        if (rule.name === 'required') {
            return `${field}: ${_i18n.t('validate.required')}`;
        } else if (rule.name === 'min') {
            return `${field}: ${_i18n.t('validate.min',{params: params[0]})}`;
        } else if (rule.name === 'email') {
            return `${field}: ${_i18n.t('validate.email')}`;
        } else if (rule.name === 'pwdConfirmed') {
            return `${_i18n.t('validate.pwdConfirmed')}`;
        } else if (rule.name === 'name') {
            return `${field}: ${_i18n.t('validate.name')}`;
        } else if (rule.name === 'key') {
            return `${field}: ${_i18n.t('validate.key')}`;
        }
    }

    configure({
        validateOnInput: true,
        validateOnBlur: true,
        validateOnChange: true,
        generateMessage,
    });
    nuxtApp.vueApp.component('Form', Form)
    nuxtApp.vueApp.component('Field', Field)
    nuxtApp.vueApp.component('ErrorMessage', ErrorMessage)

})
