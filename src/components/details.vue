<template>
  <div>
    <detailsHead/>
    <h2>{{msg}}</h2>
    <p>{{msg2}}</p>
    <button @click="run()">{{msg}}</button>
    <button @click="getata()">请求数据</button>
    <br>
    <hr>

    <detailsNews/>
  </div>
</template>
<script>
  import detailsHead from './detailsHead.vue'
  import detailsNews from './detailsNews.vue'
  export default{
    data(){
      return {
        msg:'hehe',
        msg2:'hello,Everyone',
        api:"http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1",
        list:[]
      }
    },
    methods:{
      run(){
        alert(this.msg);
      },
      getata(){
        //后台要有jsonp接口
        this.$http.jsonp(this.api).then((res)=>{
          this.list=res;
          console.log(res);

        },function (err) {
          console.log(err);
        })
      },

    },
    mounted(){
      this.getata();
    },
    components:{
      detailsHead,
    detailsNews
    }
  }
</script>
<style>
  h2{
    background-color:#eee;

  }
</style>
