// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置
import { Icon } from '@icedesign/base';

const headerMenuConfig = [
  {
    name: '反馈',
    // path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    // path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: '全部项目',
    path: '/',
    icon: 'home2',
  },
  // {
  //   name: '全部技能',
  //   path: '/skill',
  //   icon: 'cascades',
  // },
  // {
  //   name: '知识库',
  //   path: '/repository',
  //   icon: 'person',
  // },
  // {
  //   name: '实体管理',
  //   path: '/entities',
  //   icon: 'directory',
  // },
  // {
  //   name: '泛化规则',
  //   path: '/generalization',
  //   icon: 'task',
  // },
  // {
  //   name: '函数管理',
  //   path: '/function',
  //   icon: 'directory',
  // },
  // {
  //   name: '发布项目',
  //   path: '/publish',
  //   icon: 'publish',
  // },
  // {
  //   name: '数据统计',
  //   path: '/analysis',
  //   icon: 'chart',
  // },
  // {
  //   name: '基本设置',
  //   path: '/setting',
  //   icon: 'shopcar',
  // }
    {
      name: '流水线管理',
      path: '/pipeline',
      icon: 'ol-list',
    },
    {
        name: '测试管理',
        path: '/test',
        icon: 'repair',
    },
    {
        name: '应用管理',
        path: '/application',
        icon: 'publish',
    },
     {
         name: '自调节集成',
         path: '/ciadjust',
         icon: 'cascades',
     }
];

export { headerMenuConfig, asideMenuConfig };
