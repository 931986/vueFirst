<template>
  <div>
    <detailsHead/>
   <!-- <v-head ref="son" :title="title" :get="get" :getdata="getdata" :detail="this"></v-head>-->

    <h2>{{msg}}</h2>
    <ul>
      <li>sundetailnews</li>
      <li>web</li>
      <li>node</li>

      <li><button @click="getdata()">请求数据</button></li>
      <li><button @click="get()">请求axios</button></li>
      <li><button @click="md()">主动请求子组件</button></li>
    </ul>
    <ul class="list">
      <li v-for="(item,key) in list">
        <router-link :to="'/contentand/'+item.aid">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import Axios from 'axios'
  import son from './son.vue'
  //props，导入并绑定子组件属性
  //子组件props['..']
  import detailsHead from './detailsHead.vue'
  export default {
    data(){
      return {
        msg:'News Everyday',
        title:'to be honest',
      list:[],
        api:"http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1",

        aid:''
      }
    },
    methods:{
      getdata(){
        //使用$http.get

        this.$http.get(this.api).then(function (res) {
          console.log(res);
          this.list=res.body.result;
          console.log(this.list);
        },function (err) {
          console.log(err);
        })
      },
      get(){
        Axios.get(this.api).then((res)=> console.log(res)).catch((err)=> console.log(err));
      },
      md(){
        this.$refs.son.run();
      },
    },
    mounted(){

    this.getdata();


    },
    components:{
      detailsHead,
      'v-head':son
    }
  }
</script>
<style>
  ul{
    list-style-type: none;
  }
  li{
    margin-left:40px;
  }
  a{
    list-style-type: none;
    text-decoration: none;
  }
</style>
