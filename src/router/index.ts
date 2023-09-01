import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'), 
    meta: {
      requireAuth: false
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
    path: '/register',
    name: 'register',
    component: RegisterView, 
    meta: {
      requireAuth: false
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//TODO: Agregar la persistencia del token
router.beforeEach((to, from, next) => {
  const store = useAuthStore()

  const needAuth = to.meta.requireAuth

  if (needAuth && store.getBearerToken() === '') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
