import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home'
import planthealth from '@/components/planthealth'
import dashboard from '@/components/dashboard'
import plantdata from '@/components/plantdata'
import camera from '@/components/camera'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:home,
      redirect:'/planthealth',
      children:[
        {
          path:'/planthealth',
          name: 'planthealth',
          component:planthealth
        },
        {
          path:'/dashboard',
          name:'dashboard',
          component:dashboard
        }
        ,{
          path:'/plantdata',
          name:'plantdata',
          component:plantdata
        },
        {
          path:'/camera',
          name:'camera',
          component:camera
        }
      ]
    }
  ]
})
