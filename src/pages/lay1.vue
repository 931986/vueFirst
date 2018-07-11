<template>
  <div>
    comA and {{A}}
    <button @click="run">send</button>
  </div>
</template>
<script>
  import vueEvent from '../model/ECmodel'
  export default {

    name:'comA',
data(){
      return {
        A:'浮生物语'
  }
},methods:{
  run(){
    vueEvent.$emit('t0-lay2',this.A);
  }
    }
  }
</script>
<style>

</style>
