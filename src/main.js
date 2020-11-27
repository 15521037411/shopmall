// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// new Vue({
//     el: '#app',
//     router,
//     render: h => h(App)
//   })
import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

//Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')

createApp(App).use(router).mount('#app')