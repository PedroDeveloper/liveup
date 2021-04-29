import Vue from 'vue'
import VueRouter from 'vue-router'
import Cabecalho from '../views/Cabecalho.vue'
import Cardapio from '../views/Cardapio.vue'


Vue.use(VueRouter)

const routes = [

   {
    path: '/',
    name: 'Home',
    component: Cabecalho
  },
  {
    path: '/Cardapio',
    name: 'Cardapio',
    component: Cardapio

  },
]

const router = new VueRouter({
  routes
})

export default router
