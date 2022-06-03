import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./style.scss";
import store from "./store";
import Axios from 'axios'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Toast);


const token = localStorage.getItem('token');
Axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Axios.defaults.headers.common['Content-Type'] = 'application/json'
Axios.defaults.headers.common['Accept'] = 'application/json'

Vue.prototype.$appName = "WorldGeeks";
Vue.prototype.$http = Axios;
Axios.defaults.baseURL = process.env.VUE_APP_API_URL

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
