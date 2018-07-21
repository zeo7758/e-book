import Vue from 'vue'
import Router from 'vue-router'
import bookStage from '@/components/bookStage/bookStage'
import personCenter from '@/components/personCenter/personCenter'
import bookRank from '@/components/bookRank/bookRank'
import login from '@/components/login/login'
import theme from '@/components/theme/theme'
import fontConfig from '@/components/fontConfig/fontConfig'
import concatUs from '@/components/concatUs/concatUs'
import bookInfo from '@/components/bookInfo/bookInfo'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bookStage',
      redirect: '/bookStage',
      component: bookStage,
    },
    {
      path: '/bookStage',
      name: 'bookStage',
      component: bookStage,
      meta:{
        title: '我的书架',
        isLeft: false,
        isright:false,
        isTab:true
      }
    },
    {
      path: '/bookRank',
      name: 'bookRank',
      component: bookRank,
      meta:{
        title: '排行榜',
        isLeft: false,
        isright:false,
        isTab:true
      }
    },
    {
      path: '/personCenter',
      name: 'personCenter',
      component: personCenter,
      meta:{
        title: '个人中心',
        isLeft: false,
        isright:false,
        isTab:true
      },
      children:[
          {
            path: '/personCenter/theme',
            name: 'theme',
            component: theme,
            meta:{
              title: '主题',
              isLeft: true,
              isright:false,
              isTab:false,
            }
          },
          {
            path: '/personCenter/fontConfig',
            name: 'fontConfig',
            component: fontConfig,
            meta:{
              title: '字体设置',
              isLeft: true,
              isright:false,
               isTab:false,
            }
          },
          {
              path: '/personCenter/concatUs',
              name: 'concatUs',
              component: concatUs,
              meta:{
                title: '联系我们',
                isLeft: true,
                isright:false,
                 isTab:false,
              },
          },
      ]
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta:{
          title: '登录',
          isLeft: true,
          isright:false,
           isTab:false,
        },
    },
    {
        path: '/bookInfo/:id',
        name: 'bookInfo',
        component: bookInfo,
        meta:{
          title: '书籍详情',
          isLeft: true,
          isright:false,
          isTab:false,
        },
    },

  ]
})
