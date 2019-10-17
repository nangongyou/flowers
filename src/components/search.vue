<template>
  <div class="search">
    <headers :titles="title"></headers>
    <section>
      <div class="searchBox"><input type="text" placeholder="搜索鲜花"><button type="button">搜索</button></div>
      <ul>
          <router-link to="/comprehensive" tag="li">综合</router-link>
          <router-link to="/sales" tag="li">销量</router-link>
          <router-link to="/price" tag="li">价格</router-link>
          <router-link to="/time" tag="li">时间</router-link>
      </ul>
      <div>
        <router-view />
      </div>    	
    </section>
  </div>
</template>

<script>
import headers from '@/components/headers'
export default {
  data () {
    return {
    	title:"鲜花速运"
    }
  },
  components:{
  	headers
  }
}
</script>

<style scoped lang="less">
	.search{
		section{
      .searchBox{
        width:100%;
        height:42px;
        display:flex;
        background-color:#fff;
        input{
          height:32px;
          margin:5px 10px;
          flex-grow:1;
          border-radius:16px;
          border:1px solid #ccc;
          background-color: #f7f7f7;
          padding-left:20px;
        }
        button{
          width:52px;
          height:32px;
          margin:5px 10px;
          border-radius:5px;
          background-color:#ff4466;
          border-style:none;
          color:#fff;
        }
      }
      ul{
        margin:10px 0;
        background-color:#fff;
        display:flex;
        height:38px;
        list-style:none;
        border:1px solid #eee;
        font-size:16px;
        li{
          height:38px;
          flex-grow:1;
          line-height:38px;
        }
        .router-link-active{
          color:red;
        }
      }
      div{
        background-color: #f2f2f2;
      }
    }
	}
</style>