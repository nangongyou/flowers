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
import rule from "@/components/rule"
import address from "@/components/address"
import editAddress from "@/components/editAddress"
import order from "@/components/order"
import search from "@/components/search"
import comprehensive from "@/components/comprehensive"
import time from "@/components/time"
import price from "@/components/price"
import sales from "@/components/sales"
import goods from "@/components/goods"
import allComments from "@/components/allComments"
import ordergoods from "@/components/ordergoods"

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
    },
    {
        path:'/rule',
        name:'rule',
        component:rule
    },
    {
        path:'/address',
        name:'address',
        component:address
    },
    {
        path:'/editAddress',
        name:'editAddress',
        component:editAddress
    },
    {
        path:'/order',
        name:'order',
        component:order
    },
    {
        path:"/search",
        name:"search",
        component:search,
        children:[
             {
                path:'/comprehensive',
                name:'comprehensive',
                component:comprehensive
            },
            {
                path:'/sales',
                name:'sales',
                component:sales
            },
            {
                path:'/time',
                name:'time',
                component:time
            },
            {
                path:'/price',
                name:'price',
                component:price
            }
        ],
        redirect:"/comprehensive"
    },
    {
        path:"/goods",
        name:"goods",
        component:goods
    },
    {
        path:"/allComments",
        name:"allComments",
        component:allComments
    },
    {
        path:"/ordergoods",
        name:"ordergoods",
        component:ordergoods
    }
  ]
})
