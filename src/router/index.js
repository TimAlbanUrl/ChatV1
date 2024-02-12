import { createRouter, createWebHistory } from 'vue-router'
import ChatView from '../views/ChatView.vue'
import { supabase } from '../../supabase'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ChatView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/LoginView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const { data } = await supabase.auth.getSession()
  const isLoggedIn = true//!!data.session // !! is not null

  if(to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn)
    next({ name: 'login' })
  else
    next()
})

export default router
