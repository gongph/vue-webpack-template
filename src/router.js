import VueRouter from 'vue-router'

// import Foo from './components/foo.vue'
// import Bar from './components/bar.vue'

const Foo = resolve => require(['./components/foo.vue'], resolve)
const Bar = resolve => require(['./components/bar.vue'], resolve)

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

export const router = new VueRouter({
  routes,
  mode: 'history'
})
