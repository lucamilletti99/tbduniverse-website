import Vue from 'vue';
import App from './components/App.vue';
import router from './router/router';

var GSignInButton = require('vue-google-signin-button')
Vue.use(GSignInButton)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
