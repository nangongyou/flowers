<template>
  <div class="shopping">
    <header>
    	<router-link to="/" tag="div">
    		<i class="el-icon-arrow-left"></i>
    	</router-link>
    	购物车
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
    <footer>
    	合计：<span>&yen;{{money}}</span><div class="pay">去结算</div>	
    </footer>
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
	footer{
		width:100%;
		height: 50px;
		position:fixed;
		bottom:0;
		line-height:50px;
		text-align:left;
		padding-left:10px;
		font-weight:bold;
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
</style>