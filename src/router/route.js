import ComplexTable from '../views/Table/complex-table/ComplexTable.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import Documentation from '../views/Documentation.vue'
import Guide from '../views/Guide.vue'
import PagePermission from '../views/PagePermission.vue'
import DirectivePermission from '../views/DirectivePermission.vue'
import RolePermission from '../views/RolePermission.vue'
import Icons from '../views/Icons.vue'
import KeyboardChart from '../views/Components/KeyboardChart.vue'
import KeyChart from '../views/charts/KeyChart.vue'
import NestedRoutes from '../views/Nested-Routes.vue'
import DynamicTable from '../views/Table/dynamic-table/DynamicTable.vue'
import DragTable from '../views/Table/drag-table/DragTable.vue'
import InlineEditTable from '../views/Table/inline-edit/InlineEditTable.vue'
import Create from '@/views/example/create.vue'
import Edit from '@/views/example/edit.vue'
import List from '@/views/example/list.vue'
import Tab from '@/views/Tab.vue'
import Page401 from '@/views/error-page/401.vue'
import Page404 from '@/views/error-page/404.vue'
import ErrorLog from '../views/errorLog.vue'
import PDF from '../views/PDF.vue'
import Theme from '../views/Theme.vue'
import Clipboard from '../views/Clipboard.vue'
import ExternalLink from '../views/ExternalLink.vue'
import ExportExcel from '../views/myExcel/ExportExcel.vue'
import ExportSelected from '../views/myExcel/ExportSelected.vue'
import MergeHeader from '../views/myExcel/MergeHeader.vue'
import UploadExcel from '../views/myExcel/UploadExcel.vue'

const routes = [
  {
    path: '/dashboard',
    name: '首页',
    meta: { icon: 'House' },
    component: Dashboard
  },
  {
    path: '/documentation',
    name: '文档',
    component: Documentation,
    meta: { icon: 'Document' }
  },
  {
    path: '/guide',
    name: '引导页',
    component: Guide,
    meta: { icon: 'Position' }
  },
  {
    path: '/permission',
    name: '权限测试页',
    meta: { icon: 'Lock' },
    redirect: '/permission/pagePermission',
    children: [
      {
        path: '/permission/pagePermission',
        name: '页面权限',
        component: PagePermission
      },
      {
        path: '/permission/directivePermission',
        name: '指令权限',
        component: DirectivePermission
      },
      {
        path: '/permission/rolePermission',
        name: '角色权限',
        component: RolePermission
      }
    ]
  },
  {
    path: '/icons',
    name: '图标',
    component: Icons,
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
    meta: { icon: '#icon-component' },
    children: [
      {
        path: '/components/keyboardChart',
        name: '键盘图表',
        component: KeyboardChart
      }
    ]
  },
  {
    path: '/charts',
    name: '图表',
    meta: { icon: 'Histogram' },
    children: [
      {
        path: '/charts/KeyChart',
        name: '图表1',
        component: KeyChart
      }
    ]
  },
  {
    path: '/nested-Routes',
    name: '路由嵌套',
    component: NestedRoutes,
    meta: { icon: '#icon-routes' }
  },
  {
    path: '/myTable',
    name: '表格',
    meta: { icon: 'Grid' },
    redirect: '/dynamicTable',
    children: [
      {
        path: '/dynamicTable',
        name: '动态表',
        component: DynamicTable
      },
      {
        path: '/dragTable',
        name: '拖动表格',
        component: DragTable
      },
      {
        path: '/inlineEdit',
        name: '内联表格',
        component: InlineEditTable
      },
      {
        path: '/complexTable',
        name: '查询表格',
        component: ComplexTable
      }
    ]
  },
  {
    path: '/example',
    name: '综合实例',
    meta: { icon: 'HelpFilled' },
    children: [
      {
        path: '/example/create',
        component: Create,
        name: '创建文章',
        meta: { title: 'Create Article', icon: 'Edit' }
      },
      {
        path: '/example/edit',
        component: Edit,
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: '/example/list',
        component: List,
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
        component: Tab,
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
        path: '/401',
        component: Page401,
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '/404',
        component: Page404,
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },
  {
    path: '/errorLog',
    name: '错误日志',
    component: ErrorLog,
    meta: { icon: 'QuestionFilled' }
  },
  {
    path: '/pdf',
    name: 'PDF',
    component: PDF,
    meta: { icon: '#icon-pdf' }
  },
  {
    path: '/theme',
    name: '主题',
    component: Theme,
    meta: { icon: '#icon-jingzi' }
  },
  {
    path: '/clipboard',
    name: '剪切面板',
    component: Clipboard,
    meta: { icon: '#icon-copy' }
  },
  {
    path: '/externalLink',
    name: '外部链接',
    component: ExternalLink,
    meta: { icon: '#icon-link' }
  },
  {
    path: '/myExcel',
    name: '电子表格',
    meta: { icon: '#icon-excelwenjian' },
    redirect: '/exportExcel',
    children: [
      {
        path: '/exportExcel',
        name: '导出电子表格',
        component: ExportExcel
      },
      {
        path: '/exportSelected',
        name: '导出已选',
        component: ExportSelected
      },
      {
        path: '/mergeHeader',
        name: '合并标题',
        component: MergeHeader
      },
      {
        path: '/uploadExcel',
        name: '上传电子表格',
        component: UploadExcel
      }
    ]
  }
]
export default routes
