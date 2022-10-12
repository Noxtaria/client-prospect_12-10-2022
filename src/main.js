import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import CatalogueComponent from "./pages/Catalogue.vue"
import ClientsComponent from "./pages/Clients.vue"
import HistoriqueComponent from "./pages/Historique.vue"

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: "history",
  routes:[
    {
      path: "/catalogue",
      name: "catalogue",
      component: CatalogueComponent
    },
    {
      path: "/clients",
      name: "clients",
      component: ClientsComponent
    },
    {
      path: "/historique",
      name: "historique",
      component: HistoriqueComponent
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
