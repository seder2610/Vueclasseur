import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



import './assets/main.css'

library.add(faCirclePlus, faMagnifyingGlass);
const app = createApp(App);

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
