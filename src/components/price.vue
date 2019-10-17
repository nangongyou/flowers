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
    			imgs:"/static/images/flower3.jpg",
    			title:"爱情",
                price:"12189",
                sold:"7777",
    		},
    		{
    			id:"002",
    			imgs:"/static/images/flower1.jpg",
    			title:"不断地爱你爱你",
                price:"6309",
                sold:"8477",
    		},
    		{
    			id:"003",
    			imgs:"/static/images/flower2.jpg",
    			title:"狂热的爱",
                price:"6049",
                sold:"1587",
    		},
    		{
    			id:"004",
    			imgs:"/static/images/flower3.jpg",
    			title:"你是珍贵",
                price:"1899",
                sold:"7062",
    		},
    		{
    			id:"005",
    			imgs:"/static/images/flower1.jpg",
    			title:"懂你爱你",
                price:"1889",
                sold:"1535",
    		},
    		{
    			id:"006",
    			imgs:"/static/images/flower2.jpg",
    			title:"爱不变",
                price:"1259",
                sold:"8938",
    		},
    		{
    			id:"007",
    			imgs:"/static/images/flower3.jpg",
    			title:"对你一往情深",
                price:"1229",
                sold:"8939",
    		},
    		{
    			id:"008",
    			imgs:"/static/images/flower1.jpg",
    			title:"爱你的感觉",
                price:"1209",
                sold:"5909",
    		},
    		{
    			id:"009",
    			imgs:"/static/images/flower2.jpg",
    			title:"心为你留",
                price:"1199",
                sold:"8087",
    		},
    		{
    			id:"010",
    			imgs:"/static/images/flower3.jpg",
    			title:"爱的海洋",
                price:"1169",
                sold:"2406",
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