import { createRouter, createWebHistory } from 'vue-router'
import {useStore} from "@/stores";
import {get} from "@/net";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',  //空地址重定向到index
      redirect: '/index'
    },
    {
      path: '/index',  //前台首页，视具体功能设置登录拦截
      name: 'index',
      component: () => import('@/views/IndexView.vue')
    },
    {
      path: '/', //登录功能子页面
      name: 'welcome',
      component: () => import('@/views/WelcomeView.vue'),
      children: [
        {
          path: 'login', //登录页面
          name: 'welcome-login',
          component: () => import('@/components/welcome/LoginPage.vue'),

        },
        {
          path: 'register', //注册页面
          name: 'welcome-register',
          component: () => import('@/components/welcome/RegisterPage.vue')
        },
        {
          path: 'forget', //忘记密码页面
          name: 'welcome-forget',
          component: () => import('@/components/welcome/ForgetPage.vue')
        }
      ]
    },
    {
      path: '/admin', //后台首页
      name: 'admin',
      component: () => import('@/views/manage/IndexView.vue')
    },
    {
      path: '/error', //错误页面
      name: 'error',
      component: () => import('@/views/error/ErrorView.vue'),
      children: [
        {
          path: '', //404
          name: 'NotFound',
          component: () => import('@/components/error/NotFoundPage.vue'),

        },
        {
          path: '/denied', //403无权限
          name: 'AccessDenied',
          component: () => import('@/components/error/DeniedPage.vue')
        },
        {
          path: '/network', //网络异常
          name: 'Network',
          component: () => import('@/components/error/NetErrorPage.vue')
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  const store = useStore()

  if(to.matched.length === 0 || to.path === '/error') {
    store.net.notFound = true
  } else if (store.net.status === true) {
    if(store.auth.user == null) {
      get('/api/user/status', (message) => {  //有登陆
        store.auth.user = message
        if(store.auth.user.role === 0 && to.path.startsWith('/admin')) {
          next('/denied')
        } else if(to.name.startsWith('welcome-')){
          next('/index')
        }  else {
          next()
        }
      }, () => {  //未登录
        store.auth.user = null
        if(to.path.startsWith('/admin')) {
          next('/login')
        } else {
          next()
        }
      }, () => {
        store.net.status = false
      })
    } else if(store.auth.user.role === 0 && to.path.startsWith('/admin')) {
      next('/denied')
    } else if(to.name.startsWith('welcome-')){
      next('/index')
    }  else {
      next()
    }
  } else {

  }

})

export default router
