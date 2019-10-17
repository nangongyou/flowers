<template>
  <div class="order">
    <headers :titles="title"></headers>
    <section>
      <ul>
          <router-link to="" tag="li">待付款</router-link>
          <router-link to="" tag="li">待发货</router-link>
          <router-link to="" tag="li">待收货</router-link>
          <router-link to="" tag="li">全部订单</router-link>
      </ul>
      <router-view />
    </section>
  </div>
</template>

<script>
import headers from '@/components/headers'
export default {
  data () {
    return {
    	title:"我的订单"
    }
  },
  components:{
  	headers
  }
}
</script>

<style scoped lang="less">
  .order{
    height:100vh;
    background-color:#f6f6f6;
    section{
      ul{
        background-color:#fff;
        display:flex;
        height:38px;
        list-style:none;
        li{
          height:38px;
          flex-grow:1;
          line-height:38px;
        }
        // .router-link-active{
        //   color:red;
        //   border-bottom:2px solid red;
        // }
      }
    }
  }
</style>