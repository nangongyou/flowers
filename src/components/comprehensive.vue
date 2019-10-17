<template>
  <div class="comprehensive">
    <flowers :Transit="flower"></flowers>
  </div>
</template>

<script>
import flowers from "@/components/template"
export default {
  data () {
    return {
    	flower:[
    		{
    			id:"001",
    			imgs:"/static/images/flower1.jpg",
    			title:"等你的季节",
                price:"199",
                sold:"977",
    		},
    		{
    			id:"002",
    			imgs:"/static/images/flower2.jpg",
    			title:"海洋之恋",
                price:"199",
                sold:"821",
    		},
    		{
    			id:"003",
    			imgs:"/static/images/flower3.jpg",
    			title:"一往情深",
                price:"309",
                sold:"431",
    		},
    		{
    			id:"004",
    			imgs:"/static/images/flower1.jpg",
    			title:"爱你不是两三天",
                price:"159",
                sold:"517",
    		},
    		{
    			id:"005",
    			imgs:"/static/images/flower2.jpg",
    			title:"携手一辈子",
                price:"159",
                sold:"511",
    		},
    		{
    			id:"006",
    			imgs:"/static/images/flower3.jpg",
    			title:"知秋",
                price:"289",
                sold:"429",
    		},
    		{
    			id:"007",
    			imgs:"/static/images/flower1.jpg",
    			title:"秘密花园",
                price:"299",
                sold:"269",
    		},
    		{
    			id:"008",
    			imgs:"/static/images/flower2.jpg",
    			title:"宝贝我爱你",
                price:"169",
                sold:"283",
    		},
    		{
    			id:"009",
    			imgs:"/static/images/flower3.jpg",
    			title:"醉红",
                price:"299",
                sold:"435",
    		},
    		{
    			id:"010",
    			imgs:"/static/images/flower1.jpg",
    			title:"花开漫恋",
                price:"279",
                sold:"540",
    		}
    	]
    }
  },
  components:{
  	flowers
  }
}
</script>

<style scoped>

</style>