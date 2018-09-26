import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {                                                                        //当首次进入页面时，页面没有显示任何组件；让页面一加载进来就默认显示first页面
    path:'/',                                                           //重定向，就是给它重新指定一个方向，加载一个组件；
    component:resolve => require(['@/components/links'],resolve)
  },{                                                                        //当首次进入页面时，页面没有显示任何组件；让页面一加载进来就默认显示first页面
    path:'/schoolIndex',                                                           //重定向，就是给它重新指定一个方向，加载一个组件；
    component:resolve => require(['@/components/schoolIndex'],resolve)
  },{
    path:'/top',
    component:resolve => require(['@/components/top'],resolve)
  },{
    path:'/login',
    component:resolve => require(['@/components/login'],resolve)
  },{
    path:'/signIn',
    component:resolve => require(['@/components/signIn'],resolve)
  },{
    path:'/attendance',
    component:resolve => require(['@/components/attendance'],resolve)
  },{
    path:'/timetable',
    component:resolve => require(['@/components/timetable'],resolve)
  },{
    path:'/activity',
    component:resolve => require(['@/components/activity'],resolve)
  },{
    path:'/classExamination',
    component:resolve => require(['@/components/classExamination'],resolve)
  },{
    path:'/classSpace',
    component:resolve => require(['@/components/classSpace'],resolve)
  },{
    path:'/dynamic',
    component:resolve => require(['@/components/dynamic'],resolve)
  },{
    path:'/honor',
    component:resolve => require(['@/components/honor'],resolve)
  },{
    path:'/appList',
    component:resolve => require(['@/components/appList'],resolve)
  },{
    path:'/dynamicM',
    component:resolve => require(['@/components/dynamicM'],resolve)
  },{
    path:'/attendanceMine',
    component:resolve => require(['@/components/attendanceMine'],resolve)
  },{
    path:'/timeTableMine',
    component:resolve => require(['@/components/timeTableMine'],resolve)
  },{
    path:'/achievement',
    component:resolve => require(['@/components/achievement'],resolve)
  },{
    path:'/homePage',
    component:resolve => require(['@/components/homePage'],resolve)
  },{
    path:'/score',
    component:resolve => require(['@/components/score'],resolve)
  },{
    path:'/homeWork',
    component:resolve => require(['@/components/homeWork'],resolve)
  },{
    path:'/classDemeanor',
    component:resolve => require(['@/components/classDemeanor'],resolve)
  },{
    path:'/classDemeanorCon',
    component:resolve => require(['@/components/classDemeanorCon'],resolve)
  },{
    path:'/notifyList',
    component:resolve => require(['@/components/notifyList'],resolve)
  },{
    path:'/notifyDetails',
    component:resolve => require(['@/components/notifyDetails'],resolve)
  },{
    path:'/scHomePage',
    component:resolve => require(['@/components/scHomePage'],resolve)
  },{
    path:'/classList',
    component:resolve => require(['@/components/classList'],resolve)
  }
  
  
//这里require组件路径根据自己的配置引入
]
//最后创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数。

const router = new Router({
  routes
})

export default router
