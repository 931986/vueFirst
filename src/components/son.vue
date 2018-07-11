<template>
  <div class="apphead">

 <div class="app-head-inner">
   <img src="../assets/logo.png">
   <span class="word">
     身为君主就是这么任性,{{title}}



   </span>
   <ul class="leftnav">
     <li><router-link to="/detail">detail</router-link></li>
     <li><router-link to="/son">son</router-link></li>
     <li><router-link to="/todo">todo</router-link></li>




   </ul>
   <div >
     <ul class="rightnav">
       <li><a href="" @click="accountGet()">登录</a></li>
       <li><a href="" class="nav-li">|</a></li>
       <li><a href="">注册</a></li>
       <li><a href="" class="nav-li">|</a></li>
       <li><a href="">关于</a></li>
       <li><button @click="getdata()">hehe</button>son</li>
       <li><button @click="getE()">洛霞</button></li>
       <li><router-link to="/user">用户声明</router-link></li>

     </ul>
   </div>
 </div>

  </div>
</template>
<script>
  import account from './account.vue'
  export default {
    name: 'son',
    data() {
      return {}


    },
    props:['title','getdata','detail']
,methods:{
      run(){
  alert("hehe");
    },
      getE(){
        console.log(this.title);
        console.log(this.$parent.api);
      },
      accountGet(){
        this.$router.push({ path: '/account' });
      }
    }
    //第一种跳转方式

    // this.$router.push({ path: 'news' })


    // this.$router.push({ path: '/content/495' });


    //另一种跳转方式

    //   { path: '/news', component: News,name:'news' },


    // router.push({ name: 'news', params: { userId: 123 }})

  }
</script>
<style scoped>

  .apphead{
    background-color: aqua;
    width:100%;
    height:100px;
  }
  img{
    width:80px;
    height:60px;
    position:absolute;
    margin-top:20px;
    margin-left:60px;


  }
  .rightnav{

    float:right;
    margin-top:40px;
    margin-right:200px;



    list-style-type: none;

  }
  .leftnav{
    float:left;
    margin-top:40px;
    margin-left:350px;
    list-style-type: none;
  }
  .leftnav li{
    float:left;
    margin-left:40px;
  }
  .rightnav li{
    float:left;
    margin-left:20px;
  }
  .nav-li{
    padding:0 10px;
  }
  .word{
    margin-top:40px;
   left:160px;
    position: absolute;
  }
  ul{
    list-style-type: none;
  }
</style>
