import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5e72ca49 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _655eda47 = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _ae98542c = () => interopDefault(import('../pages/_uid.vue' /* webpackChunkName: "pages/_uid" */))
const _dfb263a8 = () => interopDefault(import('../pages/_lang/_uid.vue' /* webpackChunkName: "pages/_lang/_uid" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _5e72ca49,
    name: "index"
  }, {
    path: "/:lang",
    component: _655eda47,
    name: "lang"
  }, {
    path: "/:uid",
    component: _ae98542c,
    name: "uid"
  }, {
    path: "/:lang/:uid",
    component: _dfb263a8,
    name: "lang-uid"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
