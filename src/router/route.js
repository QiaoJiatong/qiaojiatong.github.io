const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/dashboard.vue')
  },
  {
    path: '/documentation',
    name: 'documentation',
    component: () => import('../views/documentation.vue'),
    children: [
      {
        path: '/documentation/home',
        name: 'docHome',
        component: () => import('../views/dashboard.vue')
      }
    ]
  },
  {
    path: '/Guide',
    name: 'Guide',
    component: () => import('../views/Guide.vue')
  },
  {
    path: '/Permission',
    name: 'Permission',
    component: () => import('../views/Permission.vue')
  },
  {
    path: '/Icons',
    name: 'Icons',
    component: () => import('../views/Icons.vue')
  },
  // {
  //   path: '/documentation',
  //   name: 'documentation',
  //   component: () => import('../views/documentation.vue')
  // },
  {
    path: '/Components',
    name: 'Components',
    component: () => import('../views/Components.vue')
  },
  {
    path: '/Charts',
    name: 'Charts',
    component: () => import('../views/Charts.vue')
  },
  {
    path: '/Nested-Routes',
    name: 'Nested-Routes',
    component: () => import('../views/Nested-Routes.vue')
  },
  {
    path: '/MyTable',
    name: 'MyTable',
    component: () => import('../views/MyTable.vue')
  },
  {
    path: '/Example',
    name: 'Example',
    component: () => import('../views/Example.vue')
  },
  {
    path: '/Tab',
    name: 'Tab',
    component: () => import('../views/Tab.vue')
  }
]
export default routes
