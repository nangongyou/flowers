<template>
  <div class="rule">
    <headers :titles="title"></headers>
    <section>
      <div class="top">
        <img :src="flowers[0].img" alt="">
        <p>{{flowers[0].title}}--{{flowers[0].desc}}</p>
        <div class="price"><span>&yen;{{flowers[0].newPrice}}</span><s>&yen;{{flowers[0].oldPrice}}</s><div>已售：{{flowers[0].sold}}</div></div>
        <div class="condition">
          <div><i class="el-icon-circle-check"></i>品质保障</div>
          <div><i class="el-icon-circle-check"></i>市区免费配送</div>
          <div><i class="el-icon-circle-check"></i>2小时送达</div>
        </div>
        <table>
          <tr>
            <td>花语</td>
            <td>{{flowers[0].flowerLange}}</td>
          </tr>
          <tr>
            <td>花材</td>
            <td>{{flowers[0].desc}}</td>
          </tr>
          <tr>
            <td>包装</td>
            <td>{{flowers[0].packing}}</td>
          </tr>
          <tr>
            <td>配送</td>
            <td>{{flowers[0].send}}</td>
          </tr>
          <tr>
            <td>赠送</td>
            <td>{{flowers[0].present}}</td>
          </tr>
        </table>
      </div>
      <div class="number">
        数量
        &nbsp;
        <input type="button" value="-" @click="handleReduce(1)"><button type="button">{{this.flowers[0].num}}</button><input type="button" value="+" @click="handleAdd(1)">
      </div>
      <div class="evaluation">
        <router-link to="/allComments" tag="p">订单评价<span><i class="el-icon-arrow-right"></i></span></router-link>
        <div class="sect">
          <div class="userTime">用户{{flowers[0].evaluation[0].user}} <span>{{flowers[0].evaluation[0].time}}</span></div>
          <div class="redlove">
            <span v-for="(item,i) in flowers[0].evaluation[0].num" :key="i">
              <img src="../../static/images/goods/redlove.png" alt="">
            </span>
            <p>{{flowers[0].evaluation[0].userdesc}}</p>
            <img :src="flowers[0].evaluation[0].img" alt="">
            <router-link to="/allComments" tag="div">
              <input type="button" value="查看全部评价"></router-link>
          </div>
        </div>
      </div>
      <div class="allImg">
        <p>图文详情</p>
        <div v-for="(item,i) in flowers[0].allimg" :key="i">
          <img :src="item" alt="">
        </div>
      </div>    
    </section>
    <nav>
      <router-link to="/" tag="div">
        <img src="../../static/images/首页 (1).png" alt="">
        <br>
        首页
      </router-link>
      <router-link to="/shopping" tag="div">
        <img src="/static/images/购物车.png" alt="">
        <br>
        购物车
      </router-link>
      <router-link to="" tag="div">
        <img src="/static/images/电话.png" alt="">
        <br>
        电话
      </router-link>
      <div @click="addgoods">
        加入购物车
      </div>
      <div @click="buy">
        立即购买
      </div>
      <!-- <router-link :to="{
        path:'/shopping',
        query:{
          flowers,
          num
        }
      }" tag="div">
        加入购物车
      </router-link>
      <router-link :to="{
        path:'/ordergoods',
        query:{
          flowers,
          num
        }
      }" tag="div">
        立即购买
      </router-link> -->
    </nav>
  </div>
</template>

<script>
import headers from '@/components/headers'
export default {
  data () {
    return {
    	title:"执子之手",
      flowers:[
        {
          id:"001",
          num:1,
          img:"../../static/images/flower1.jpg",
          title:"执子之手",
          desc:"99枝精品玫瑰（粉玫和红玫瑰）满天星外围一圈",
          newPrice:599.00,
          oldPrice:759.00,
          sold:9632,
          flowerLange:"一辈子是段太长太远的时光，执子之手，与子偕老的一辈子，相濡以沫，不离不弃的一辈子",
          packing:"粉色雾面纸圆形包扎，中间粉玫瑰桃心造型，丝带蝴蝶结",
          send:"本地区各市县，乡镇，街道（市区内免费配送）",
          present:"下单填写留言，即免费赠送精美贺卡",
          evaluation:[
            {
              user:"130****6124",
              time:"2019-08-29 10:08:24",
              num:4,
              userdesc:"在我要求的时间准时送到女朋友的手里，女朋友很喜欢！非常赞哦下次还来买！",
              img:"../../static/images/flower1.jpg"
            },
            {
              user:"130****5817",
              time:"2019-08-29 19:08:37",
              num:5,
              userdesc:"花还是一如既往的漂亮",
              img:"../../static/images/flower2.jpg"
            },
            {
              user:"159****1385",
              time:"2019-08-29 11:08:22",
              num:5,
              userdesc:"花很好 服务更好 感谢",
              img:"../../static/images/flower3.jpg"
            },
            {
              user:"132****7373",
              time:"2019-08-30 16:08:02",
              num:4,
              userdesc:"买了两次，下次应该不会再光顾了",
              img:"../../static/images/flower1.jpg"
            }
          ],
          allimg:[
          "../../static/images/goods/goods1.png",
          "../../static/images/goods/goods2.jpg",
          "../../static/images/goods/goods3.jpg",
          "../../static/images/goods/goods4.jpg",
          "../../static/images/goods/goods5.jpg",
          "../../static/images/goods/goods6.jpg",
          "../../static/images/goods/goods7.jpg",
          "../../static/images/goods/goods8.jpg",
          "../../static/images/goods/goods9.jpg",
          "../../static/images/goods/goods10.jpg",
          ]
        }
      ]
    }
  },
  components:{
  	headers
  },
  methods:{
    handleAdd(n){
      this.$store.commit('mutationsAddCount',n);
      this.flowers[0].num=this.$store.state.count
    },
    handleReduce(n){
      if(this.$store.state.count>1){
        this.$store.commit('mutationsReduceCount',n);
        this.flowers[0].num=this.$store.state.count
      }
    },
    addgoods(){
      localStorage.setItem(this.flowers[0].id,JSON.stringify(this.flowers))
      location.href="#/shopping"
    },
    buy(){
      localStorage.setItem(this.flowers[0].id,JSON.stringify(this.flowers))
      location.href="#/ordergoods"
    }
  }
}
</script>

<style scoped lang="less">
	.rule{
		section{
      padding:0 15px;
      .top{
        img{
          width:100%;
        }
        p{
          font-size:16px;
          font-weight:bold;
          text-align:left;
          margin:10px 0;
        }
        .price{
          text-align:left;
          height:36px;
          line-height:36px;
          span{
            color:red;
            font-size:20px;
          }
          s{
            color:#aaa;
            padding:0 10px;
          }
          div{
            float:right;
            height:36px;
          }
        }
        .condition{
          display:flex;
          background-color:#f7f7f7;
          height:34px;
          line-height:34px;
          div{
            flex-grow:1;
          }
          div:first-child{
            text-align:left;
          }
          div:last-child{
            text-align:right;
          }
        }
        table{
          width:100%;
          font-size:14px;
          tr{
            td{
              padding:8px 4px;
            }
            td:first-child{
              width: 43px;
              color:#aaa;
              vertical-align:top;
            }
            td:last-child{
              text-align:left;
              border-bottom:1px solid #eee;
            }
          }
        }
      }
      .number{
        height:44px;
        width:100%;
        line-height:44px;
        margin:10px 0;
        text-align:left;
        *{
          background-color:#fff;
        }
        input{
          width:39px;
          height:30px;
          border:1px solid #ccc;
        }
        button{
          width: 42px;
          height:30px;
          border:1px solid #ccc;
        }
      }	
      .evaluation{
        text-align:left;
        font-size:14px;
        &>p{
          height:46px;
          width:100%;
          line-height:46px;
          span{
            float:right;
            height:46px;
          }
        }
        .sect{
          .userTime{
            height:34px;
            padding:10px 0;
            span{
              float:right;
            }
          }
          .redlove{
            span{
              img{
                width:20px;
              }
            }
            p{
              margin:10px 0;
            }
            &>img{
              width:80px;
            }
            div{
              text-align:center;
              input{
                height:32px;
                width:180px;
                border-radius:16px;
                color:orange;
                border:1px solid orange;
                background-color:#fff;
              }
            }
          }
        }
      }
      .allImg{
        text-align:left;
        width:100%;
        p{
          margin:10px;
          font-size:14px;
        }
        img{
          width:100%;
        }
      }	
		}
    nav{
      display:flex;
      position:fixed;
      bottom:0;
      z-index:10;
      width:100%;
      height:50px;
      background-color:#fff;
      color:#000;
      div{
        flex-grow:1;
        padding:5px;
        img{
          width:20px;
        }
      }
      div:nth-child(4),div:nth-child(5){
        flex-grow:2;
        line-height:45px;
        color:#fff;
      }
      div:nth-child(4){
        background-color:#ff9800;
      }
      div:nth-child(5){
        background-color:#ff4466;
      }
    }
	}
</style>