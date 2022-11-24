import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify Setup

// Style
import 'vuetify/styles'
import './assets/main.scss'
// Icons
import '@fortawesome/fontawesome-free/css/all.css' // fortawesome
import 'material-design-icons-iconfont/dist/material-design-icons.css' // material-design

import { createVuetify } from 'vuetify'

import { aliases, fa } from 'vuetify/iconsets/fa'
import { md } from 'vuetify/iconsets/md'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({

  components,
  directives,

  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      md
    }
  },

})
// Vuetify Setup

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
