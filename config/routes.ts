export default [
  {
    path: '/',
    redirect: '/chart/add',
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: 'User/Login',
      },
      {
        name: 'register',
        path: '/user/register',
        component: 'User/Register',
      },
    ],
  },
  {
    name: 'info',
    path: '/user/info',
    component: './User/Info',
    hideInMenu: true,
  },
  {
    path: '/chart',
    icon: 'barChart',
    name: '图表',
    routes: [
      {
        path: '/chart/add',
        name: '智能分析(同步)',
        icon: 'barChart',
        component: 'Chart/AddChart',
      },
      // {
      //   path: '/chart/add/async',
      //   name: '智能分析（异步线程池）',
      //   icon: 'barChart',
      //   component: 'Chart/AddChartSync',
      // },
      {
        path: '/chart/add/async/mq',
        name: '智能分析(异步mq)',
        icon: 'barChart',
        component: 'Chart/AddChartSyncMq',
      },
      {
        path: '/chart/list',
        name: '我的图表',
        icon: 'pieChart',
        component: 'Chart/ChartList',
      },
    ],
  },
  {
    path: '/admin',
    name: '管理',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        name: '用户管理',
        path: '/admin/user',
        component: 'Admin/User',
      },
      {
        name: '图表管理',
        path: '/admin/chart',
        component: 'Admin/Chart',
      },
    ],
  },

  {
    name: '图片分析',
    path: '/image/add',
    component: './AddImage',
    icon: 'barChart',
  },

  {
    name: '文本识别',
    path: '/text/analysis',
    component: './TextAnalysis',
    icon: 'barChart',
  },

  {
    path: '*',
    layout: false,
    component: './404',
  },
];
