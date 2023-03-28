import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
// import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBriefcaseMedical, faHeadSideMask, faSpinner, faHeadSideVirus, faMedkit, faFileMedical, faProcedures } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBriefcaseMedical, faHeadSideMask, faSpinner, faHeadSideVirus, faMedkit, faFileMedical, faProcedures);

const app = createApp(App)
app.use(VueAxios, axios).use(store)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
