<template>
  <div class="loginPho">
    <headers :titles="title"></headers>
	<section>
		<div class="imgs"><img src="../../static/images/ismei.png" alt=""></div>
		<br>
		<input type="text" placeholder="用户名/已验证手机号" v-model="user">
		<br>
		<div class="pwd">
			<input type="password" placeholder="请输入验证码" v-model="vernum">
			<button type="button" @click="getMa">获取验证码</button>
		</div>
		<br>
		<input type="button" value="登录" class="butt" @click="login">
		<div class="nav">
			<router-link to="/login"><button type="button">账号密码登录</button></router-link>
			<router-link to="/register"><input type="button" value="立即注册"></router-link>
		</div>
	</section>
  </div>
</template>

<script>
import headers from '@/components/headers'
export default {
  data () {
    return {
    	title:"验证码登陆",
    	num:"",
    	vernum:"",
    	user:""
    }
  },
  components:{
  	headers
  },
  methods:{
  	getMa(){
  		if(this.user!=""){
	  		for(var i=0;i<localStorage.length;i++){
	  			if(this.user==localStorage.key(i)){
	  				this.num=parseInt(Math.random()*10000)
	  				alert(this.num)
	  			}
	  		}
  		}
  	},
  	login(){
  		if(this.vernum==this.num){
  			for(var i=0;i<localStorage.length;i++){
	  			if(this.user==localStorage.key(i)){
	  				location.href="#/user"
	  				sessionStorage.setItem(this.user,localStorage.getItem(this.user))
	  			}
	  		}	
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
			[type=password]{
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
			input{
				float:right;
			}
			button{
				float:left;
			}
		}
		
	}
</style>