export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/production',
    name: 'production',
    icon: 'smile',
    component: './Production',
  },
  {
    path: '/car',
    name: 'car',
    icon: 'smile',
    component: './Car',
  },
  {
    path: '/video',
    name: 'video',
    icon: 'smile',
    component: './Video',
  },
  {
    path: '/test',
    name: 'test',
    icon: 'smile',
    component: './Test',
  },  {
    path: '/loadInfo',
    name: 'LoadInfo',
    icon: 'smile',
    component: './LoadInfo',
  },
  {
    path: '/peopleInfo',
    name: 'PeopleInfo',
    icon: 'smile',
    component: './PeopleInfo',
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  }
];
