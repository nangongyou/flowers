<template>
  <div class="headers">
    <header>
    	<div class="back" @click="callback">
    		<i class="el-icon-arrow-left"></i>
    	</div>
    	{{titles}}
    	<div class="more">
    		<i class="el-icon-more" @click="fun1"></i>
    		<div class="morebox" v-show="isShow">
    			<i class="el-icon-caret-top"></i>
    			<router-link to="/" tag="div">
    				<div class="moreImg"><img src="../../static/images/首页 (1).png" alt=""></div><div class="moreFont">首页</div>
    			</router-link>
    			<router-link to="/category" tag="div">
    				<div class="moreImg"><img src="../../static/images/分类 (1).png" alt=""></div><div class="moreFont">分类</div>
    			</router-link>
    			<router-link to="/shopping" tag="div">
    				<div class="moreImg"><img src="../../static/images/购物车.png" alt=""></div><div class="moreFont">购物车</div>
    			</router-link>
    			<div @click="butt">
    				<div class="moreImg"><img src="../../static/images/我的.png" alt=""></div><div class="moreFont">我的</div>
    			</div>
    		</div>
    	</div>
    </header>
  </div>
</template>

<script>
export default {
	props:["titles"],
  data () {
    return {
    	isShow:false,
    }
  },
  methods:{
  	fun1(){
  		if(this.isShow==false){
  			this.isShow=true
  		}else{
  			this.isShow=false
  		}
  	},
  	callback(){
  		window.history.back()
  	},
  	butt(){
  		for(var i=0;i<localStorage.length;i++){
  			for(var j=0;j<sessionStorage.length;j++){
  				if(localStorage.key(i)==sessionStorage.key(j) && localStorage.getItem(localStorage.key(i))==sessionStorage.getItem(sessionStorage.key(j))){
  					return window.location.href="#/user"
  				}
  			}
  		}
  		setTimeout(function(){
  			window.location.href="#/login"
  		},0)
  	}
  },
}
</script>

<style scoped lang="less">
	header{
		background-color:#fff;
		position:relative;
		width:100%;
		height:46px;
		line-height:46px;
		border-bottom:1px solid #aaa;
		font-size:16px;
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
				border-radius:4px;
				i{
					font-size:20px;
					position:absolute;
					right:-15px;
					top:-28px;
					color:#000;
				}
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

</style>