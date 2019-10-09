import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import category from "@/components/category"
import huacai from "@/components/huacai"
import yanse from "@/components/yanse"
import zhishu from "@/components/zhishu"
import xianhuayongtu from "@/components/xianhuayongtu"
import xianhualeibie from "@/components/xianhualeibie"
import jierixuanhua from "@/components/jierixuanhua"
import songhuaduixiang from "@/components/songhuaduixiang"
import jiage from "@/components/jiage"
import hualanyongtu from "@/components/hualanyongtu"
import lvzhihuahui from "@/components/lvzhihuahui"
import shopping from "@/components/shopping"
import login from "@/components/login"
import forgetPwd from "@/components/forgetPwd"
import register from "@/components/register"
import loginPho from "@/components/loginPho"
import user from "@/components/user"


Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	name:'index',
    	component:index
    },
    {
        path:'/category',
        name:'category',
        component:category,
        children:[
            {
                path:'/huacai',
                name:'huacai',
                component:huacai
            },
            {
                path:'/yanse',
                name:'yanse',
                component:yanse
            },
            {
                path:'/zhishu',
                name:'zhishu',
                component:zhishu
            },
            {
                path:'/xianhuayongtu',
                name:'xianhuayongtu',
                component:xianhuayongtu
            },
            {
                path:'/xianhualeibie',
                name:'xianhualeibie',
                component:xianhualeibie
            },
            {
                path:'/jierixuanhua',
                name:'jierixuanhua',
                component:jierixuanhua
            },
            {
                path:'/songhuaduixiang',
                name:'songhuaduixiang',
                component:songhuaduixiang
            },
            {
                path:'/jiage',
                name:'jiage',
                component:jiage
            },
            {
                path:'/hualanyongtu',
                name:'hualanyongtu',
                component:hualanyongtu
            },
            {
                path:'/lvzhihuahui',
                name:'lvzhihuahui',
                component:lvzhihuahui
            }
        ],
        redirect:"/huacai"
    },
    {
        path:'/shopping',
        name:'shopping',
        component:shopping
    },
    {
        path:'/login',
        name:'login',
        component:login
    },
    {
        path:'/forgetPwd',
        name:'forgetPwd',
        component:forgetPwd
    },
    {
        path:'/register',
        name:'register',
        component:register
    },
    {
        path:'/loginPho',
        name:'loginPho',
        component:loginPho
    },
    {
        path:'/user',
        name:'user',
        component:user
    }
  ]
})
