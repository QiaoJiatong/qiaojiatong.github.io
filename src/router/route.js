const routes = [
  {
    path: '/dashboard',
    name: '首页',
    meta: { icon: 'House' },
    component: () => import('../views/dashboard/dashboard.vue')
  },
  {
    path: '/documentation',
    name: '文档',
    component: () => import('../views/documentation.vue'),
    meta: { icon: 'Document' }
  },
  {
    path: '/guide',
    name: '引导页',
    component: () => import('../views/Guide.vue'),
    meta: { icon: 'Position' }
  },
  {
    path: '/permission',
    name: '权限测试页',
    meta: { icon: 'Lock' },
    children: [
      {
        path: '/permission/pagePermission',
        name: '页面权限',
        component: () => import('../views/PagePermission.vue')
      },
      {
        path: '/permission/directivePermission',
        name: '指令权限',
        component: () => import('../views/DirectivePermission.vue')
      },
      {
        path: '/permission/rolePermission',
        name: '角色权限',
        component: () => import('../views/RolePermission.vue')
      }
    ]
  },
  {
    path: '/icons',
    name: '图标',
    component: () => import('../views/Icons.vue'),
    meta: { icon: '#icon-i' }
  },
  // {
  //   path: '/documentation',
  //   name: 'documentation',
  //   component: () => import('../views/documentation.vue')
  // },
  {
    path: '/components',
    name: '组件',
    component: () => import('../views/Components.vue'),
    meta: { icon: '#icon-component' }
  },
  {
    path: '/charts',
    name: '图表',
    component: () => import('../views/Charts.vue'),
    meta: { icon: 'Histogram' }
  },
  {
    path: '/nested-Routes',
    name: '路由嵌套',
    component: () => import('../views/Nested-Routes.vue'),
    meta: { icon: '#icon-routes' }
  },
  {
    path: '/myTable',
    name: 'MyTable',
    component: () => import('../views/MyTable.vue'),
    meta: { icon: 'Grid' }
  },
  {
    path: '/example',
    name: '综合实例',
    meta: { icon: 'HelpFilled' },
    children: [
      {
        path: '/example/create',
        component: () => import('@/views/example/create.vue'),
        name: '创建文章',
        meta: { title: 'Create Article', icon: 'Edit' }
      },
      {
        path: '/example/edit',
        component: () => import('@/views/example/edit.vue'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: '/example/list',
        component: () => import('@/views/example/list.vue'),
        name: '文章列表',
        meta: { title: 'Article List', icon: 'List' }
      }
    ]
  },
  {
    path: '/tab',
    name: 'Tab',
    meta: { icon: '#icon-table' },
    children: [
      {
        path: 'index',
        component: () => import('@/views/Tab.vue'),
        name: 'Tab',
        meta: { title: 'Tab' }
      }
    ]
  },
  {
    path: '/error',
    redirect: 'noRedirect',
    name: '错误页面',
    meta: {
      title: 'Error Pages',
      icon: 'WarnTriangleFilled'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401.vue'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      // {
      //   path: '404',
      //   component: () => import('@/views/error-page/404'),
      //   name: 'Page404',
      //   meta: { title: '404', noCache: true }
      // }
    ]
  },
  {
    path: '/errorLog',
    name: '错误日志',
    component: () => import('../views/errorLog.vue'),
    meta: { icon: 'QuestionFilled' }
  }
]
export default routes
