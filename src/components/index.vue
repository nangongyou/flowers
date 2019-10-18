<template>
  <div class="index">
    <nav>
    	<ul>
    		<li>
    			<router-link to="/" tag="div">
	    			<img src="/static/images/首页.png" alt="">
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
    			<div @click="butt">
	    			<img src="/static/images/我的.png" alt="">
	    			<br>
	    			我的
	    		</div>
    		</li>
    	</ul>
    </nav>
    <header>
	    <img src="/static/images/ismei.png" alt=""><input type="search" placeholder="搜索鲜花、永生花、礼品"><button type="button" @click="butt">{{msg}}</button>
    </header>
    <aside>
    	<!-- <el-button type="text" @click="dialogVisible = true"> -->
    		<img src="../../static/images/在线客服.png" alt="">
    		<h3>
    			在<br>线<br>客<br>服
    		</h3>
    	<!-- </el-button> -->

		<!-- <el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="30%"
		  :before-close="handleClose">
		  <span>这是一段信息</span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog> -->
	</aside>
	<div class="comeTop">
		<a href="#"><i class="el-icon-top"></i></a>
	</div>
	<router-link to="/search" tag="div" class="el-carousel">
	    <el-carousel trigger="click" height="250px">
	      <el-carousel-item v-for="item in img" :key="item">
	        <img :src="item" alt="">
	      </el-carousel-item>
	    </el-carousel>
	</router-link>
	<div class="nav"> 
		<ul>
			<router-link to="/search" tag="li">
				<img src="/static/images/allflowers.jpg" alt="">
			</router-link>
			<router-link to="/search" tag="li">
				<img src="/static/images/flowerbox.jpg" alt="">
			</router-link>
			<router-link to="/search" tag="li">
				<img src="/static/images/greentree.jpg" alt="">
			</router-link>
			<router-link to="/search" tag="li">
				<img src="/static/images/alllife.jpg" alt="">
			</router-link>
		</ul>
		<div class="hotFlower">
			<router-link to="/goods" tag="div">
				<img src="../../static/images/flower1.jpg" alt="">
				<div>
					爱你不是两三天
					<br>
					&yen;159.00
				</div>
			</router-link>
			<router-link to="/goods" tag="div">
				<img src="../../static/images/flower2.jpg" alt="">
				<div>
					暖暖的祝福
					<br>
					&yen;219.00
				</div>
			</router-link>
			<router-link to="/goods" tag="div">
				<img src="../../static/images/flower3.jpg" alt="">
				<div>
					缪斯女神
					<br>
					&yen;199.00
				</div>
			</router-link>
		</div>
	</div>
	<div class="obj">
		<div class="head">
			送花对象
			<router-link to="/search">更多<i class="el-icon-arrow-right"></i></router-link>
		</div>
		<div class="sect">
			<router-link to="/search" tag="div">
				<img src="../../static/images/obj1.jpg" alt="">
			</router-link>
			<router-link to="/search" tag="div">
				<img src="../../static/images/obj2.jpg" alt="">
			</router-link>
			<router-link to="/search" tag="div">
				<img src="../../static/images/obj3.jpg" alt="">
			</router-link>
		</div>
	</div>
	<div class="loveFlower">
		<div class="head">
			爱情鲜花
			<router-link to="/search">更多<i class="el-icon-arrow-right"></i></router-link>
		</div>
		<div class="section">
			<router-link to="/goods" tag="div" v-for="(item,i) in products" :key="i">
				<img :src="item.img" alt="">
				<div>{{item.title}}</div>
				<div class="price">{{item.price}}</div>
			</router-link>
		</div>
	</div>
	<footer>
		<div>花语大全</div>
		<div>
			<div>---客服热线400-901-0239---</div>
			<p>Copyright&copy;2007~2009 爱上鲜花（中国鲜花礼品网）版权所有</p>
			<p>中国鲜花网领先品牌，鲜花速递专家！</p>
		</div>
	</footer>
  </div>
</template>

<script>
export default {
 	data () {
	    return {
	    	img:["/static/images/lunbotu1.jpg","/static/images/lunbotu2.jpg","/static/images/lunbotu3.jpg","/static/images/lunbotu4.jpg","/static/images/lunbotu5.jpg",],
	    	dialogVisible: false,
	    	msg:"登录",
	    	products:[
	    			{
	    				id:"001",
	    				img:"/static/images/flower1.jpg",
	    				title:"携手一辈子",
	    				price:"159.00",
	    			},
	    			{
	    				id:"002",
	    				img:"/static/images/flower2.jpg",
	    				title:"一生中只爱",
	    				price:"189.00",
	    			},
	    			{
	    				id:"003",
	    				img:"/static/images/flower3.jpg",
	    				title:"甜美公主",
	    				price:"219.00",
	    			},
	    			{
	    				id:"004",
	    				img:"/static/images/flower1.jpg",
	    				title:"甜蜜之语",
	    				price:"229.00",
	    			},
	    			{
	    				id:"005",
	    				img:"/static/images/flower2.jpg",
	    				title:"秘密花园",
	    				price:"299.00",
	    			},
	    			{
	    				id:"006",
	    				img:"/static/images/flower3.jpg",
	    				title:"一往情深",
	    				price:"309.00",
	    			},
	    			{
	    				id:"007",
	    				img:"/static/images/flower1.jpg",
	    				title:"情有独钟",
	    				price:"169.00",
	    			},
	    			{
	    				id:"008",
	    				img:"/static/images/flower2.jpg",
	    				title:"爱你到老",
	    				price:"309.00",
	    			},
	    			{
	    				id:"009",
	    				img:"/static/images/flower3.jpg",
	    				title:"宝贝我爱你",
	    				price:"529.00",
	    			},
	    			{
	    				id:"010",
	    				img:"/static/images/flower1.jpg",
	    				title:"暖暖的祝福",
	    				price:"219.00",
	    			}
	    		]
	    }
  	},
  	mounted(){
  		for(var i=0;i<localStorage.length;i++){
  			for(var j=0;j<sessionStorage.length;j++){
  				if(localStorage.key(i)==sessionStorage.key(j) && localStorage.getItem(localStorage.key(i))==sessionStorage.getItem(sessionStorage.key(j))){
  					console.log("123")
  					return this.msg="ism-133"
  				}
  			}
  		}
  		this.msg="登录"
  	},
  	methods: {
      	butt(){
      		if(this.msg=="ism-133"){
      			window.location.href="#/user"
      		}
      		else{
      			window.location.href="#/login"
      		}
      	}
  	}	
}
</script>

<style scoped lang="less">
.index{
	nav{
		width:100%;
		position:fixed;
		bottom:0;
		z-index:10000;
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
			li:nth-child(3),li:nth-child(1){
				color:#fe5722;
			}
		}
	}
	header{
		width:100%;
		background-color:#fff;
		height:40px;
		position:fixed;
		top:0;
		line-height:40px;
		z-index:1000;
		img{
			width:15%;
			float:left;
			height:40px;
		}
		input{
			width:70%;
			padding:2px 20px;
			border-radius:20px;
			background-color:#ebebeb;
			height:36px;
			border-style:none;
		}
		button{
			width:15%;
			border-style:none;
			background-color:#ffffff;
			color:#fe5722;
			float:right;
			height:36px;
			overflow:hidden;
			white-space:nowrap;
		}
	}
	aside{
		width:40px;
		height:160px;
		position:fixed;
		right:0;
		top:20vh;
		z-index:1000;
		background-color:#fe5722;
		img{
			width:30px;
		}
		h3{
			line-height:23px;
			color:#fff;
		}
	}
	.comeTop{
		width:50px;
		height:50px;
		border-radius:25px;
		background-color:#fff;
		position:fixed;
		bottom:80px;
		right:10px;
		line-height:50px;
	}
	.el-carousel{
		width:100%;
		img{
			width:100%;
		}
	}
	.nav{
		ul{
			display:flex;
			list-style:none;
			li{
				flex-grow:1;
				text-align:center;
				img{
					width:80px;
				}
			}
		}
	}
	.hotFlower{
		margin:20px 0;
		display:flex;
		justify-content:space-around;
		div{
			width:30%;
			position:relative;
			div{
				position:relative;
				top:-30px;
				left:0;
				background-color:#0003;
				color:#fff;
				z-index:100;
				font-size:13px;
				padding:5px 0;
				width:100%;
			}
			img{
				width:100%;
			}
		}
		
	}
	.obj{
		margin:10px 0;
		padding:10px 0;
		background-color:#fff;
		.head{
			font-size:18px;
			text-align:left;
			a{
				float:right;
				font-size:16px;
				color:#000;
				text-decoration:none;
			}
		}
		.sect{
			margin:5px 0;
			display:flex;
			justify-content:space-around;
			div{
				width:100px;
				height:100px;
				margin:0 5px;
				img{
					width:100px;
					height:100px;
				}
			}
		}
	}
	.loveFlower{
		margin:10px 0;
		.head{
			margin:10px 0;
			font-size:18px;
			text-align:left;
			a{
				float:right;
				font-size:16px;
				color:#000;
				text-decoration:none;
			}
		}
		.section{
			display:flex;
			flex-wrap:wrap;
			justify-content:space-around;
			div{
				width:47%;
				margin:5px;
				text-align:left;
				img{
					width:100%;
				}
				.price{
					color:red;
				}
			}
		}
	}
	footer{
		padding-bottom:60px;
		&>div:first-child{
			height:45px;
			border-bottom:1px solid #ccc;
			font-size:14px;
			line-height:45px;
		}
		&>div:last-child{
			font-size:12px;
			div{
				color:red;
				padding:5px;
			}
			p{
				padding:5px;
				color:#aaa;
			}
		}
	}
}
</style>