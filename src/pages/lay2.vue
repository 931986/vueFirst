<template>
  <div>
    comB
    {{naw}}
  </div>
</template>
<script>
  import vueEvent from '../model/ECmodel'
  export default {
    name:'comA',
    data(){
      return {
        naw:''
      }
    },
methods:{
      mouted (){
        vueEvent.$on('to-lay2',function (data) {
          console.log(data);
          this.naw=data;
        })

  }
}
  }
</script>
<style>

</style>
