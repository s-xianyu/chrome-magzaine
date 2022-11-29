import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'

injectJsInsert()

function injectJsInsert () {
  document.addEventListener('readystatechange', () => {
    const injectPath = 'assets/inject.js'
    const script = document.createElement('script')

    script.setAttribute('type', 'text/javascript')
    script.src = chrome.extension.getURL(injectPath)
    document.body.appendChild(script)
  })
}

createApp(App).mount('#app')
