<template>
  <div class="parent">
    父组件
    <child>
      <div slot="s1">
        <ul>
          <li>
            hehe
          </li>
          <li>
            haha
          </li>
        </ul>
        <p>heheda</p>
        <p>插槽1</p>
      </div>
      <div slot="s2">
        <p>哎吆</p>插槽</div>
    </child>

  </div>
</template>
<script>
  import  child from './insert-child.vue'
  export default {
    name:"parent",
    date:{

    },
    components:{
      child
    }
  }
</script>
<style scoped>
  ul{
    list-style-type:none
  }

</style>
