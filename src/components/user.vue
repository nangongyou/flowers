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
    			<router-link to="/" tag="div">
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
    <header>
    	<router-link to="/" tag="div">
    		<i class="el-icon-arrow-left"></i>
    	</router-link>
    	个人中心
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
    			<router-link to="/user" tag="div">
    				<div class="moreImg"><img src="../../static/images/首页 (1).png" alt=""></div><div class="moreFont">我的</div>
    			</router-link>
    		</div>
    	</div>
    </header>
    <section>
    	<div class="top">
    		<div class="userPhoto">
    			<img src="../../static/images/user.png" alt="">
    		</div>
    		ism_17862664828
    		<br>
    		<img src="../../static/images/jifen.png" alt="">
    	</div>
    	<div class="center"></div>
    	<div class="bottom">
    		
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
						// border:1px solid red;
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