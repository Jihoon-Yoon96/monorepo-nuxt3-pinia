import { addPlugin, defineNuxtModule, createResolver } from '@nuxt/kit'
import { join } from 'path'

export default defineNuxtModule({
    setup(_, nuxt) {
        nuxt.hook('components:dirs', dirs => {
            // 공통 컴포넌트
            dirs.push({
                path: join(__dirname, 'lib/components'),
                prefix: 'common',
            })
            // 공통 레이아웃
            dirs.push({
                path: join(__dirname, 'lib/layouts'),
                prefix: 'common-layouts',
            })
        })

        const { resolve } = createResolver(import.meta.url)

        // plugin (밑에서부터 위 순서로 인식됨)
        addPlugin(resolve('lib/plugins/helper.ts'))
        addPlugin(resolve('lib/plugins/dayjs.ts'))
        addPlugin(resolve('lib/plugins/dialog.ts'))
        addPlugin(resolve('lib/plugins/vee-validate.js'))
        addPlugin(resolve('lib/plugins/i18n.ts'))
        addPlugin(resolve('lib/plugins/popup.ts'))
    },
})

