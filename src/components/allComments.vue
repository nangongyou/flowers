<template>
  <div class="allComments">
    <headers :titles="title"></headers>
    <section>
        <router-link to="" tag="p">全部评论<span><i class="el-icon-arrow-right"></i></span></router-link>
        <div class="sect" v-for="(item,i) in evaluation" :key="i">
          <div class="userTime">用户{{item.user}} <span>{{item.time}}</span></div>
          <div class="redlove">
            <span v-for="(item,i) in item.num" :key="i">
              <img src="../../static/images/goods/redlove.png" alt="">
            </span>
            <p>{{item.userdesc}}</p>
            <img :src="item.img" alt="">
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import headers from '@/components/headers'
export default {
  data () {
    return {
    	title:"商品评论",
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
          ]
    }
  },
  components:{
  	headers
  }
}
</script>

<style scoped lang="less">
	.allComments{
		section{
      padding:10px;
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
          border-top:1px solid #eee;
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
	}
</style>