<template>
  <div class="child">
    子组件
    <slot name="s1"></slot>
    <hr/>
    <slot name="s2"></slot>
  </div>
</template>
<script>
  export default {
    name:"child",
    date:{

    }
  }
  //插槽在父子组件皆可渲染
</script>
<style scoped>

</style>
