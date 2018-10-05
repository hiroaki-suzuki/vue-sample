import Vue from 'vue'
import Router from 'vue-router'
import AppModal from '@/components/AppModal'
import AppTabs from '@/components/AppTabs'
import AppStore from '@/components/Store/AppStore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app-modal',
      component: AppModal
    },
    {
      path: '/tabs',
      name: 'app-tabs',
      component: AppTabs
    },
    {
      path: '/store',
      name: 'app-store',
      component: AppStore
    }
  ]
})
