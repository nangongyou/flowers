<template>
  <div class="">
    <flowers :a="flower"></flowers>
  </div>
</template>

<script>
import flowers from "@/components/model"
export default {
  data () {
    return {
    	flower:[
    		{
    			id:"001",
    			imgs:"/static/images/flower1.jpg",
    			title:"手提花篮"
    		},
    		{
    			id:"002",
    			imgs:"/static/images/flower2.jpg",
    			title:"永生花"
    		},
    		{
    			id:"003",
    			imgs:"/static/images/flower3.jpg",
    			title:"手捧花"
    		},
    		{
    			id:"004",
    			imgs:"/static/images/flower1.jpg",
    			title:"鲜花花束"
    		},
    		{
    			id:"005",
    			imgs:"/static/images/flower2.jpg",
    			title:"瓶插花"
    		},
    		{
    			id:"006",
    			imgs:"/static/images/flower3.jpg",
    			title:"创意花盒"
    		},
    		{
    			id:"007",
    			imgs:"/static/images/flower2.jpg",
    			title:"卡通花束"
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