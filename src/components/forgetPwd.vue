<template>
  <div class="forgetPwd">
    <headers :titles="title"></headers>
	<section>
		<div class="imgs"><img src="../../static/images/ismei.png" alt=""></div>
		<br>
		<input type="text" placeholder="用户名/已验证手机号" v-model="user">
		<br>
		<div class="pwd">
			<input type="text" placeholder="输入验证码" v-model="num">
			<button type="button">获取验证码</button>
		</div>
		<input type="password" placeholder="设置新密码" v-model="pwd">
		<br>
		<input type="button" value="登录" class="butt" @click="butt">
		<div class="nav">
			<router-link to="/login"><button type="button">想起密码了！哈哈哈</button></router-link>
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
    	title:"找回密码",
    	user:"",
    	pwd:"",
    	vernum:"",
    	num:""
    }
  },
  components:{
  	headers
  },
  methods:{
  	getMa(){
  		var path = /^1[3-9]\d{9}$/g
  		if(this.telnum.match(path)){
	  		this.num=parseInt(Math.random()*10000)
	  		alert(this.num)
  		}
  		else{
  			alert("手机号码格式不对")
  		}
  	},
  	butt(){
  		if(this.vernum==this.num){
	  		for(var i=0;i<localStorage.length;i++){
	  			if(this.user==localStorage.key[i]){
	  				localStorage.setItem(this.user,this.pwd)
	  			}
	  		}
	  		alert("该用户尚未注册")
  		}
  		else{
  			alert("验证码错误")
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
			input{
				float:right;
			}
			button{
				float:left;
			}
		}
		
	}
</style>