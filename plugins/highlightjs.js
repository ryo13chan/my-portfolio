import Vue from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import vuePlugin from '@highlightjs/vue-plugin'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)

Vue.use(vuePlugin)
