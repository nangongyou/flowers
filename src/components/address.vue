<template>
  <div class="address">
    <headers :titles="title"></headers>
    <div v-show=""></div>
  </div>
</template>

<script>
import headers from '@/components/headers'
export default {
  data () {
    return {
    	title:"地址管理"
    }
  },
  components:{
  	headers
  }
}
</script>

<style scoped>

</style>