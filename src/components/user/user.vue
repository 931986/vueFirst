<template>
  <div class="user">
    <div class="left">
      <ul>
        <li><router-link to="/user/add">个人信息修改</router-link> </li>
        <li><router-link to="/user/list">您的个人清单</router-link> </li>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>
<style>
  .user{
    display: flex;
  }
.left{
  display:flex;
  border-right:1px solid;
  width:200px;
  min-height: 400px;

}
  .right{

    width:80%;
  }
</style>
