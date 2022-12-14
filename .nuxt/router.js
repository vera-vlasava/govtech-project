import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _01ec0994 = () => interopDefault(import('..\\pages\\datenschutz.vue' /* webpackChunkName: "pages/datenschutz" */))
const _d724296c = () => interopDefault(import('..\\pages\\impressum.vue' /* webpackChunkName: "pages/impressum" */))
const _54f733a5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _005a1062 = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _4d8ed10e = () => interopDefault(import('..\\pages\\_uid.vue' /* webpackChunkName: "pages/_uid" */))
const _93a22e9e = () => interopDefault(import('..\\pages\\_lang\\_uid.vue' /* webpackChunkName: "pages/_lang/_uid" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/datenschutz",
    component: _01ec0994,
    name: "datenschutz"
  }, {
    path: "/impressum",
    component: _d724296c,
    name: "impressum"
  }, {
    path: "/",
    component: _54f733a5,
    name: "index"
  }, {
    path: "/:lang",
    component: _005a1062,
    name: "lang"
  }, {
    path: "/:uid",
    component: _4d8ed10e,
    name: "uid"
  }, {
    path: "/:lang/:uid",
    component: _93a22e9e,
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
