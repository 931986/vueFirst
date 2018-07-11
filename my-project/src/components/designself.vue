<template>
  <div>
<input v-focus type="text">
  </div>
</template>
<script>
  export  default {
    name:'hello',
    data(){
      return {

      }
    },
    directives:{
      focus:{
        inserted:function (el) {
          el.focus();
        }
      }
    }
  }
</script>
