import Vue from 'vue'
import App from './App'
import router from './router'

import View from 'iview';
import 'iview/dist/styles/iview.css';


Vue.use(View);


// const RouterConfig = {
//   routes: Routers
// };



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
