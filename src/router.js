import VueRouter from 'vue-router'

const Foo = resolve => require(['./components/foo.vue'], resolve)
const Bar = resolve => require(['./components/bar.vue'], resolve)

const routes = [
  { path: '/foo/:id', name: 'foo', component: Foo },
  { path: '/bar', name: 'bar', component: Bar }
]

export const router = new VueRouter({
  routes,
  base: __dirname,
  // mode: 'history'
})
