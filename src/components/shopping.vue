<template>
  <div class="shopping">
    <headers :titles="title"></headers>
    <section>
    	<div class="nogoods" v-show="isShow">
    		<img src="../../static/images/购物车.png" alt="">
    		<br>
    		您还没有添加购物车！
    	</div>
    	<div class="goods" v-if="show">
    		<ul>
    			<li>
    				<div class="left">
    					<div @click="OK" :style="{backgroundColor:colorShow,borderColor:bColor}"><i class="el-icon-check"></i></div>
    					<img :src="flowers[0].img" alt="">
    				</div>
    				<div class="right">
    					<p>{{flowers[0].title}}--{{flowers[0].desc}}</p>
    					<div class="white"></div>
    					<div>
    						<span>&yen;{{$store.getters.gettersCount}}</span>
    						<div class="butt">
    							<input type="button" value="-" @click="handleReduce(1)">
    							<button type="button">{{flowers[0].num}}</button>
    							<input type="button" value="+" @click="handleAdd(1)">
    						</div>
    					</div>
    				</div>
    			</li>
    		</ul>
    	</div>
    </section>
    <footer>
    	合计：<span>&yen;{{money}}</span>
		<div class="pay" @click="goset">去结算</div>
    </footer>
    <div class="box" v-show="boxShow">
    	<div class="whiteBox">
    		<h3>提示</h3>
    		<p>你确定要删除吗？</p>
    		<div>
    			<input type="button" value="取消" @click="nohas"><input type="button" value="确定" @click="has">
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
import headers from '@/components/headers'
export default {
  data () {
    return {
    	money:this.$store.getters.gettersCount,
    	title:"购物车",
    	isShow:true,
    	flowers:"",
    	show:false,
    	boxShow:false,
    	colorShow:"#fe5722",
    	bColor:"#fff"
    }
  },
  components:{
  	headers
  },
  mounted(){
  	for(var i=0;i<localStorage.length;i++){
  		if(localStorage.key(i)=="001"){
  			this.isShow=false
  			this.show=true
  			return this.flowers=JSON.parse(localStorage.getItem(localStorage.key(i)))
  		}
  	}
  	this.isShow=true
  	this.show=false
  },
  methods:{
  	handleAdd(n){
      this.$store.commit('mutationsAddCount',n);
      this.flowers[0].num=this.$store.state.count
      this.money=this.$store.getters.gettersCount
      localStorage.setItem(this.flowers[0].id,this.flowers)
    },
    handleReduce(n){
      if(this.$store.state.count>1){
        this.$store.commit('mutationsReduceCount',n);
        this.flowers[0].num=this.$store.state.count
        this.money=this.$store.getters.gettersCount
        localStorage.setItem(this.flowers[0].id,this.flowers)
      }else if(this.$store.state.count==1){
      	this.boxShow=true
      }
    },
    goset(){
    	if(this.money>0){
    		location.href="#/ordergoods"
    	}
    },
    nohas(){
    	this.boxShow=false
    },
    has(){
    	this.boxShow=false
    	localStorage.removeItem("001")
    	this.isShow=true
  		this.show=false
  		this.money=0
    },
    OK(){
    	if(this.colorShow=="#fff"){
    		this.colorShow="#fe5722"
    		this.money=this.$store.getters.gettersCount
    		this.bColor="#fff"
    	}
    	else{
    		this.colorShow="#fff"
    		this.money=0
    		this.bColor="#000"
    	}
    }
  }
}
</script>

<style scoped lang="less">
.shopping{
	position:relative;
	section{
		margin:10px;
		font-size:16px;
		.nogoods{
			img{
				width:60px;
				height:60px;
			}
		}
		.goods{
			ul{
				width:100%;
				li{
					font-size:14px;
					text-align:left;
					padding:5px;
					height: 120px;
					display:flex;
					.left{
						width: 130px;
						display:flex;
						div{
							width: 22px;
							height:22px;
							border:1px solid #111;
							border-radius:11px;
							line-height:22px;
							margin-top:40px;
							text-align:center;
							i{
								color:#fff;
							}
						}
						img{
							width:100px;
							height:100px;
						}
					}
					.right{
						flex-grow:1;
						display:flex;
						flex-direction:column;
						.white{
							flex-grow:1;
						}
						div{
							span{
								color:red;
								font-size:16px;
								font-weight:bold;
							}
							.butt{
								float:right;
								&>*{
									height:30px;
									background-color:#fff;
									border:1px solid #eee;
								}
								input{
									width:30px;
								}
								button{
									width:60px;
								}
							}
						}
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
		z-index:10;
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
	.box{
		width:120%;
		height:120vh;
		position:absolute;
		top:0;
		left:0;
		z-index:100;
		background-color:#0009;
		.whiteBox{
			width:303px;
			height:111px;
			background-color:#fff;
			margin:200px auto;
			padding:20px;
			p{
				padding:10px;
				width: 100%;
				height:52px;
				line-height:52px;
			}
			input{
				width:45%;
				height:40px;
				border-top:1px solid #333;
				background-color: #fff;
				border-style:none;
			}
			input:last-child{
				color:blue;
			}
		}
	}
}
</style>