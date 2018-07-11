<template>
  <div>
    <form>
      <fieldset>
        <legend>The winter is coming</legend>
        <ul>
          <li><label >account</label><input type="text" autofocus="autofocus"></li>
          <li><label >password</label><input type="password"></li>
          <li><label>email</label><input type="email"></li>
<li><span>选择你的服务项目数量</span><input type="number" min="0" max="5"></li>
        </ul>
        <input type="submit" value="登录">
        <input type="submit" value="注册">
      </fieldset>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>
<style scoped>
ul{
  list-style-type: none;
}
  input{
    left:100px;
  }
  </style>
