<template>
  <div class="user">
  	<nav>
    	<ul>
    		<li>
    			<router-link to="/" tag="div">
	    			<img src="/static/images/首页 (1).png" alt="">
	    			<br>
	    			首页
	    		</router-link>
    		</li>
    		<li>
    			<router-link to="/category" tag="div">
	    			<img src="/static/images/分类 (1).png" alt="">
	    			<br>
	    			分类
	    		</router-link>
    		</li>
    		<li>
    			<router-link to="" tag="div">
	    			<img src="/static/images/电话 (1).png" alt="">
	    			<br>
	    			电话
	    		</router-link>
    		</li>
    		<li>
    			<router-link to="/shopping" tag="div">
	    			<img src="/static/images/购物车.png" alt="">
	    			<br>
	    			购物车
	    		</router-link>
    		</li>
    		<li>
    			<router-link to="/user" tag="div">
	    			<img src="/static/images/我的 (1).png" alt="">
	    			<br>
	    			我的
	    		</router-link>
    		</li>
    	</ul>
    </nav>
    <headers :titles="title"></headers>
    <section>
    	<div class="top">
    		<div class="userPhoto">
    			<img src="../../static/images/user.png" alt="">
    		</div>
    		ism_17862664828
    		<br>
    		<br>
    		<img src="../../static/images/jifen.png" alt=""> 0 <router-link to="/rule">积分规则<i class="el-icon-caret-right"></i></router-link>
    		<input type="button" value="签到">
    	</div>
    	<div class="center">
    		<router-link to="/order" tag="div">
    			<img src="../../static/images/待付款.png" alt="">
    			<br>
    			待付款
	    	</router-link>
	    	<router-link to="/order" tag="div">
    			<img src="../../static/images/待发货.png" alt="">
    			<br>
    			待发货
	    	</router-link>
    		<router-link to="/order" tag="div">
    			<img src="../../static/images/待收货.png" alt="">
    			<br>
    			待收货
	    	</router-link>
    		<router-link to="/order" tag="div">
    			<img src="../../static/images/我的订单.png" alt="">
    			<br>
    			我的订单
    		</router-link>
    	</div>
    	<div class="bottom">
    		<router-link to="/address" tag="div">
    			<i class="el-icon-map-location"></i>
    			地址管理
    		</router-link>
    		<router-link to="" tag="div">
    			<i class="el-icon-service"></i>
    			在线客服
    		</router-link>
    		<div>
    			<i class="el-icon-phone-outline"></i>
    			联系我们
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
    	title:"个人中心"
    }
  },
  components:{
  	headers
  }
}
</script>

<style scoped lang="less">
	nav{
		width:100%;
		position:fixed;
		bottom:0;
		z-index:100;
		background-color:#fff;
		ul{
			list-style:none;
			display:flex;
			padding:0;
			li{
				flex-grow:1;
				text-align:center;
				img{
					width:20px;
				}
			}
			li:nth-child(3),li:last-child{
				color:#fe5722;
			}
		}
	}
	section{
		background-color:#f6f6f6;
		.top{
			background-color:#fff;
			text-align:left;
			padding: 20px 10px;
			font-weight:bold;
			.userPhoto{
				width: 60px;
				height:60px;
				margin:0 10px;
				float:left;
				img{
					width: 100%;
				}
			}
			&>img{
				width:16px;
				height:16px;
			}
			a{
				color:#000;
				text-decoration:none;
				font-size:12px;
				font-weight:normal;
			}
			input{
				width:60px;
				height:30px;
				border-radius:15px;
				background-color:#fa764d;
				float:right;
				border-style:none;
				color:#fff;
			}
		}
		.center{
			background-color:#fff;
			margin:10px 0;
			display:flex;
			width:100%;
			height:80px;
			div{
				// border:1px solid red;
				flex-grow:1;
				padding:10px;
				img{
					height:26px;
				}
			}
		}
		.bottom{
			background-color:#fff;
			width:100%;
			div{
				// padding:0 10px;
				text-align:left;
				width:100%;
				height:54px;
				border-bottom:1px solid #eee;
				line-height:54px;
				i{
					font-size:25px;
					margin-left:10px;
				}
			}
		}
	}
</style>