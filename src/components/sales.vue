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
    			imgs:"/static/images/flower2.jpg",
    			title:"捧在手心-永生花",
                price:"529",
                sold:"48050",
    		},
    		{
    			id:"002",
    			imgs:"/static/images/flower3.jpg",
    			title:"一见钟情",
                price:"259",
                sold:"41472",
    		},
    		{
    			id:"003",
    			imgs:"/static/images/flower1.jpg",
    			title:"幸福花儿",
                price:"299",
                sold:"20518",
    		},
    		{
    			id:"004",
    			imgs:"/static/images/flower2.jpg",
    			title:"含情脉脉",
                price:"189",
                sold:"16600",
    		},
    		{
    			id:"005",
    			imgs:"/static/images/flower3.jpg",
    			title:"纯爱",
                price:"189",
                sold:"16164",
    		},
    		{
    			id:"006",
    			imgs:"/static/images/flower1.jpg",
    			title:"稳稳的幸福",
                price:"189",
                sold:"14855",
    		},
    		{
    			id:"007",
    			imgs:"/static/images/flower2.jpg",
    			title:"相濡以沫",
                price:"229",
                sold:"14533",
    		},
    		{
    			id:"008",
    			imgs:"/static/images/flower3.jpg",
    			title:"美好时光",
                price:"169",
                sold:"14362",
    		},
    		{
    			id:"009",
    			imgs:"/static/images/flower1.jpg",
    			title:"牵手一辈子",
                price:"199",
                sold:"13740",
    		},
    		{
    			id:"010",
    			imgs:"/static/images/flower2.jpg",
    			title:"天天祝福",
                price:"279",
                sold:"13664",
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