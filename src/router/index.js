import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/Main'
import DCSelf from '@/components/dcself/DCSelf'
import DC4Mul from '@/components/dc4mul/DC4Mul'
import DCDetail from '@/components/dcdetail/DCDetail'
import WeekDishs from '@/components/weekdishs/WeekDishs'
import Reception from '@/components/reception/Reception'
import CTQues from '@/components/ctques/CTQues'
import TabCTOrder from '@/components/tabctorder/TabCTOrder'
import LeaveMsg from '@/components/leavemsg/LeaveMsg'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/dcself',
      name: 'DCSelf',
      component: DCSelf
    },
    {
      path: '/dc4mul',
      name: 'DC4Mul',
      component: DC4Mul
    },
    {
      path: '/dcdetail',
      name: 'DCDetail',
      component: DCDetail
    },
    {
      path: '/weekdishs',
      name: 'WeekDishs',
      component: WeekDishs
    },
    {
      path: '/reception',
      name: 'Reception',
      component: Reception
    },
    {
      path: '/ctques',
      name: 'CTQues',
      component: CTQues
    },
    {
      path: '/tabctorder',
      name: 'TabCTOrder',
      component: TabCTOrder
    },
    {
      path: '/leavemsg',
      name: 'LeaveMsg',
      component: LeaveMsg
    }
  ]
})
