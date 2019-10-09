<template>
  <div class="register">
    <header>
    	<router-link to="/" tag="div">
    		<i class="el-icon-arrow-left"></i>
    	</router-link>
    	注册
    	<div class="more">
    		<i class="el-icon-more" @click="fun1"></i>
    		<div class="morebox" v-show="isShow">
    			<router-link to="/" tag="div">
    				<div class="moreImg"><img src="../../static/images/首页 (1).png" alt=""></div><div class="moreFont">首页</div>
    			</router-link>
    			<router-link to="/category" tag="div">
    				<div class="moreImg"><img src="../../static/images/首页 (1).png" alt=""></div><div class="moreFont">分类</div>
    			</router-link>
    			<router-link to="/shopping" tag="div">
    				<div class="moreImg"><img src="../../static/images/首页 (1).png" alt=""></div><div class="moreFont">购物车</div>
    			</router-link>
    			<router-link to="/login" tag="div">
    				<div class="moreImg"><img src="../../static/images/首页 (1).png" alt=""></div><div class="moreFont">我的</div>
    			</router-link>
    		</div>
    	</div>
    </header>
	<section>
		<div class="imgs"><img src="../../static/images/ismei.png" alt=""></div>
		<br>
		<input type="text" placeholder="注册手机号">
		<br>
		<div class="pwd">
			<input type="text" placeholder="请输入收到的验证码">
			<button type="button">获取验证码</button>
		</div>
		<input type="password" placeholder="设置新密码">
		<br>
		<input type="button" value="登录" class="butt">
		<div class="nav">
			<router-link to="login"><button type="button">已有账号！去登录</button></router-link>
		</div>
	</section>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	isShow:false,
    	money:0,
    }
  },
  methods:{
  	fun1(){
  		if(this.isShow==false){
  			this.isShow=true
  		}else{
  			this.isShow=false
  		}
  	}
  }
}
</script>

<style scoped lang="less">
	header{
		position:relative;
		width:100%;
		height:46px;
		line-height:46px;
		border-bottom:1px solid #aaa;
		div i{
			margin:15px;
			float:left;
		}
		.more{
			padding:0;
			float:right;
			.morebox{
				width:130px;
				height:160px;
				background-color:#191919;
				position:absolute;
				right:0;
				top:50px;
				color:#fff;
				div{
					margin:0;
					height:40px;
					div{
						height:40px;
						display:inline-block;
						img{
							width:14px;
							height:14px;
						}
						color:#fff;
					}
					.moreImg{
						width: 40px;
						height:40px;
					}
					.moreFont{
						width:90px;
						height:40px;
						text-align:left;
						font-size:14px;
					}
				}
			}
		}
	}
	section{
		padding:0 20px;
		.imgs{
			width: 144px;
			height:104px;
			border:2px solid #ff6600;
			margin:20px auto;
			border-radius:5px;
			img{
				width:80px;
				height:40px;
				margin-top:32px;
			}
		}
		[type=text]{
			height:34px;
			width:100%;
			margin:10px 0px;
			padding:6px 0;
			border-style:none;
			border-bottom:1px solid #eee;
		}
		.pwd{
			position:relative;
			[type=text]{
				height:34px;
				width:100%;
				margin:10px 0px;
				padding:6px 0;
				border-style:none;
				border-bottom:1px solid #eee;
			}
			[type=button]{
				height:34px;
				width:81px;
				border-style:none;
				background-color:#fff;
				position:absolute;
				right:0;
				margin:13px;
				border-left:1px solid #eee;
			}
		}
		[type=password]{
			height:34px;
			width:100%;
			margin:10px 0px;
			padding:6px 0;
			border-style:none;
			border-bottom:1px solid #eee;
		}
		.butt{
			height:48px;
			width:100%;
			border-radius:24px;
			background-image:linear-gradient(to right,#ff4455,#fd5622);
			border-style:none;
			color:#fff;
		}
		.nav{
			margin-top:20px;
			height:21px;
			width:100%;
			[type=button]{
				height:25px;
				background-color:#fff;
				border-style:none;
				color:#888;
			}
			button{
				float:left;
			}
		}
		
	}
</style>