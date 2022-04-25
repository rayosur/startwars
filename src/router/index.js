import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Walker from '../views/Skywalker'
import C3po from '../views/C3po'
import R2 from '../views/R2'
import Darth from '../views/Darth'
import Leila from '../views/Leila'
import Owen from '../views/Owen'
import Beru from '../views/Beru'
import R5 from '../views/R5'
import Biggs from '../views/Biggs'
import Obiwan from '../views/Obiwan'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/walker',
    name: 'Walker',
    component: Walker
  },
  {
    path: '/C3po',
    name: 'C3po',
    component: C3po
  },
  {
    path: '/r2',
    name: 'R2',
    component: R2
  },
  {
    path: '/darth',
    name: 'darth ',
    component: Darth 
  },
  {
    path: '/leila',
    name: 'Leila',
    component: Leila 
  },
  {
    path: '/owen',
    name: 'Owen',
    component: Owen  
  },
  {
    path: '/beru',
    name: 'Beru',
    component: Beru
  },
  {
    path: '/r5',
    name: 'R5',
    component: R5
  },
  {
    path: '/biggs',
    name: 'Biggs',
    component: Biggs
  },
  {
    path: '/obiwan',
    name: 'Obiwan',
    component: Obiwan
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
