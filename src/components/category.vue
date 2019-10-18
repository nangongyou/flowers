<template>
  <div class="category">
  	<nav>
    	<ul>
    		<li>
    			<router-link to="/" tag="div">
	    			<img src="../../static/images/首页 (1).png" alt="">
	    			<br>
	    			首页
	    		</router-link>
    		</li>
    		<li>
    			<router-link to="/" tag="div">
	    			<img src="/static/images/分类.png" alt="">
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
    			<div @click="butt">
	    			<img src="/static/images/我的.png" alt="">
	    			<br>
	    			我的
	    		</div>
    		</li>
    	</ul>
    </nav>
    <header>
    	<input type="text" placeholder="搜索鲜花、永生花、礼品">
    </header>
    <section>
    	<el-container>
		  <el-aside width="130px">
			<ul>
				<li>
					<router-link to="/huacai" tag="div">花材</router-link>
				</li>
				<li>
					<router-link to="/yanse" tag="div">颜色</router-link>		
				</li>
				<li>
					<router-link to="/zhishu" tag="div">支数</router-link>
				</li>
				<li>
					<router-link to="/xianhuayongtu" tag="div">鲜花用途</router-link>
				</li>
				<li>
					<router-link to="/xianhualeibie" tag="div">鲜花类别</router-link>
				</li>
				<li>
					<router-link to="/jierixuanhua" tag="div">节日选花</router-link>
				</li>
				<li>
					<router-link to="/songhuaduixiang" tag="div">送花对象</router-link>
				</li>
				<li>
					<router-link to="/jiage" tag="div">价格</router-link>
				</li>
				<li>
					<router-link to="/hualanyongtu" tag="div">花篮用途</router-link>
				</li>
				<li>
					<router-link to="/lvzhihuahui" tag="div">绿植花卉</router-link>
				</li>
			</ul>
		  </el-aside>
		  <el-main>
		  	<router-view/>
		  </el-main>
		</el-container>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	items:["花材","颜色","支数","鲜花用途","鲜花类别","节日选花","送花对象","价格","花篮用途","绿植花卉"]
    }
  },
  methods:{
  	butt(){
  		for(var i=0;i<localStorage.length;i++){
  			for(var j=0;j<sessionStorage.length;j++){
  				if(localStorage.key(i)==sessionStorage.key(j) && localStorage.getItem(localStorage.key(i))==sessionStorage.getItem(sessionStorage.key(j))){
  					return window.location.href="#/user"
  				}
  			}
  		}
  		window.location.href="#/login"
  	}
  }
}
</script>

<style scoped lang="less">
.category{
	height:100vh;
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
			li:nth-child(3),li:nth-child(2){
				color:#fe5722;
			}
		}
	}
	header{
		width:100%;
		height:50px;
		position:fixed;
		background-color:#fff;
		top:0;
		line-height:50px;
		border:1px solid #ddd;
		text-align:center;
		input{
			height:34px;
			border-radius:17px;
			padding-left:34px;
			width:90%;
			background-color:#f2f2f2;
			border-style:none;
		}
	}
	section{
		font-size:14px;
		margin:60px 0;
		.el-aside{
			height:100vh;
			overflow:auto;
			width:100px;
			ul{
				list-style:none;
				background-color:#f8f8f8;
				li{
					height:40px;
					line-height:40px;
					.router-link-active{
						color:red;
						background-color:#fff;
					}
				}
			}
		}
		.el-main{
			margin:0;
			padding:0;
			height:100vh;
			overflow:auto;
		}
	}
}
</style>