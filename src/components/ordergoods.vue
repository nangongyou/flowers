<template>
  <div class="ordergoods">
    <headers :titles="title"></headers>
    <section>
    	<p>
       <span>需保持v 13333333333</span>
       <br>
       上海市 长宁区 小程序吧 
      </p>
      <hr>
      <div>
        <p>商品信息</p>
        <ul>
          <li>
            <img :src="flowers[0].img" alt="">
            <p>{{flowers[0].title}}</p>
            <div>数量：{{flowers[0].num}}</div>
            <div>单价：<span>&yen;{{flowers[0].newPrice}}</span></div>
          </li>
        </ul>
      </div>
      <ul>
        <li>送花人姓名 <input type="text" placeholder="请填写姓名"></li>
        <li>送花人电话 <input type="text" placeholder="请填写电话"></li>
        <li>
          配送日期
          <div class="block">
            <span class="demonstration"></span>
            <el-date-picker
              v-model="value11"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </li>
        <li>
          时间段
          <el-select v-model="a" placeholder="不限时段" class="time">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
        <li>
          配送范围
          <el-select v-model="value1" placeholder="市内（0元）" class="time">
            <el-option
              v-for="item in option"
              :key="item.value1"
              :label="item.label"
              :value="item.value1">
            </el-option>
          </el-select>
        </li>
        <li>
          优惠卷
          <input type="text" placeholder="无" disabled>
        </li>
        <li>
          积分抵扣
          <div>
            <el-switch
              v-model="value2"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </div>
        </li>
        <li>
          积分（100分 兑换1元）
          <input type="text" placeholder="0" disabled>
        </li>
        <li>贺卡留言</li>
        <li>
          <textarea placeholder="请输入您的留言+署名...（请勿输入表情）">
          </textarea>
        </li>
        <li>
          发票
          <div>
            <el-switch
              v-model="value3"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
          </div>
        </li>
      </ul>
      <div class="price">
        商品总价：<span>+{{$store.getters.gettersCount}}</span>
        <br>
        优惠金额：<span>-0</span>
        <br>
        发票金额：<span>+0</span>
        <br>
        积分：<span>-0</span>
        <br>
        {{value1}}运费：<span>+0</span>
      </div>
    </section>
    <footer>
      合计：<span>&yen;{{$store.getters.gettersCount}}</span><div class="pay">提交订单</div> 
    </footer>
  </div>
</template>

<script>
import headers from '@/components/headers'
export default {
  data () {
    return {
    	title:"填写订单",
      flowers:"",
      value11:"",
      options: [
        {
          value: '选项1',
          label: '不限时段'
        }, 
        {
          value: '选项2',
          label: '10-12点'
        }, 
        {
          value: '选项3',
          label: '12-14点'
        }],
      a:'',
      option: [
        {
          value1: '0',
          label: '市内（0元）'
        }, 
        {
          value1: '30',
          label: '郊区（30元）'
        }, 
        {
          value1: '50',
          label: '远郊（50元）'
        }], 
      value1:"",
      value2:false,
      value3:false
    }
  },
  components:{
  	headers
  },
  created(){
    for(var i=0;i<localStorage.length;i++){
      if(localStorage.key(i)=="001"){
        this.flowers=JSON.parse(localStorage.getItem(localStorage.key(i)))
      }
    }
  }
}
</script>

<style scoped lang="less">
	.ordergoods{
		section{
      width:100%;
			text-align:left;
      margin-bottom:50px;
      p{
        font-size:14px;
        height:55px;
        width:100%;
        padding:15px 0;
        span{
          font-weight:bold;
        }
      }
      div{
        p{
          height:48px;
          line-height:48px;
        }
        ul li{
          img{
            float:left;
            width:80px;
            height:80px;
            margin: 10px;
          }
          p{
            font-size:14px;
            margin:0;
          }
          div{
            color:#ccc;
            margin-bottom:5px;
            span{
              color:red;
            }
          }
        }
      }
      &>ul{
        width:100%;
        list-style:none;
        li{
          text-align:left;
          min-height:48px;
          line-height:48px;
          font-size:16px;
          input{
            float:right;
            height:24px;
            margin:10px;
            text-align:right;
            border-style:none;
            font-size:16px;
            background-color:#fff;
          }
          .block{
            display:inline-block;
            float:right;
            text-align:right;
            width:120px;
            overflow:hidden;
          }
          .time{
            float:right;
            width:120px;
          }
          &>div{
            float:right;
          }
          textarea{
            width:100%;
            height:80px;
          }
        }
      }
      .price{
        text-align:right;
        line-height:40px;
        font-size:14px;
        span{
          color:red;
        }
      }
		}
    footer{
      width:100%;
      height: 50px;
      position:fixed;
      bottom:0;
      line-height:50px;
      text-align:left;
      padding-left:10px;
      font-weight:bold;
      z-index:100;
      background-color:#fff;
      span{
        color:#fe5722;
      }
      .pay{
        width: 110px;
        height:50px;
        float:right;
        top:-50px;
        background-color:#fe5722;
        text-align:center;
        color:#fff;
      }
    }
	}
</style>