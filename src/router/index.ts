import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuth } from '../store/useAuth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, 
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView, 
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView, 
      meta: {
        requireAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useAuth()
  if ((store.isAuthenticated === false) && (to.meta.requireAuth === true)) 
    next('login')
  else next()
})


export default router
