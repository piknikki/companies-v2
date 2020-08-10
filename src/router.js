import Vue from 'vue'
import Router from 'vue-router'

import NewCompany from '@/components/NewCompany.vue'
import EditCompany from '@/components/EditCompany.vue'
import ViewCompany from '@/components/ViewCompany.vue'
import Dashboard from './components/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-company',
      component: NewCompany
    },
    {
      path: '/:company_id',
      name: 'view-company',
      component: ViewCompany
    },
    {
      path: '/edit/:company_id',
      name: 'edit-company',
      component: EditCompany
    }
  ]
})
