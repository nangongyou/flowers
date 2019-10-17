<template>
  <div class="register">
   	<headers :titles="title"></headers>
   	<form action="">
		<section>
			<div class="imgs"><img src="../../static/images/ismei.png" alt=""></div>
			<br>
			<input type="tel" placeholder="注册手机号" path="^1[3-9]\d{9}$" v-model="telnum">
			<br>
			<div class="pwd">
				<input type="text" placeholder="请输入收到的验证码" v-model="vernum">
				<button type="button" @click="getMa">获取验证码</button>
			</div>
			<input type="password" placeholder="设置新密码" v-model="pwd">
			<br>
			<input type="button" value="登录" class="butt" @click="subbutt">
			<div class="nav">
				<router-link to="login"><button type="button">已有账号！去登录</button></router-link>
			</div>
		</section>
	</form>
  </div>
</template>

<script>
import headers from '@/components/headers'
export default {
  data () {
    return {
    	title:"注册",
    	telnum:"",
    	num:"",
    	vernum:"",
    	pwd:""
    }
  },
  components:{
  	headers
  },
  methods:{
  	getMa(){
  		var path = /^1[3-9]\d{9}$/g
  		if(this.telnum.match(path)){
	  		this.num=parseInt(Math.random()*9000+1000)
	  		alert(this.num)
  		}
  		else{
  			alert("手机号码格式不对")
  		}
  	},
  	subbutt(){
  		if(this.vernum==this.num && this.pwd!=""){
  			for(var i=0;i<localStorage.length;i++){
  				if(this.telnum==localStorage.key(i)){
  					this.vernum=""
  					this.pwd=""
  					return alert("该账号已注册")
  				}
  			}
  			localStorage.setItem(this.telnum,this.pwd)
  			return window.location.href="#/login"
  		}
  	}
  }
}
</script>

<style scoped lang="less">
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
		[type=tel]{
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