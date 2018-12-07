var routes = [{
  path: '/',
  redirect: '/index/home'
}, {
  path: "/index",
  name: 'index',
  component: resolve => require.ensure([], () => resolve(require("../views/index.vue")), 'index'),
  children: [
    {
      path: 'home',
      name: 'home',
      component: resolve => require.ensure([], () => resolve(require("../views/index/index.vue")), 'home')
    },
    {
      path: 'signUp',
      name: 'signUp',
      component: resolve => require.ensure([], () => resolve(require("../views/signUp/index.vue")), 'signUp')
    },
    {
      path: 'prize',
      name: 'prize',
      component: resolve => require.ensure([], () => resolve(require("../views/prize/index.vue")), 'prize')
    },
    {
      path: 'rankList',
      name: 'rankList',
      component: resolve => require.ensure([], () => resolve(require("../views/rankList/index.vue")), 'rankList')
    }
  ]
},
{
  path: '/vote',
  name: 'vote',
  component: resolve => require.ensure([], () => resolve(require("../views/vote/index.vue")), 'vote')
},
{
  path: '/votePrize',
  name: 'votePrize',
  component: resolve => require.ensure([], () => resolve(require("../views/votePrize/index.vue")), 'votePrize')
}
]

export default routes