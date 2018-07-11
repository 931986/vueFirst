<template>
<div class="container">
<div class="index-left">


  <h4 class="index-title">
   全部产品
  </h4>
  <div v-for="(product,index) in prod uctList">
    <h4 class="category">{{product.category}}</h4>
    <ul class="ulchuli" style="list-style-type: none">
      <li  v-for="item in product.list"><a class="anone" :href="item.url">{{item.name}}</a></li>
    </ul>
    <hr v-if='index%2===0' style="margin-top:10px;margin-bottom:10px; width:200px;">
  </div>

</div>
  <hr>
  <div class="index-right">

  </div>
</div>
</template>
<script>

  export default {
    name:'layout',
    data(){
      return{
        productList:[{
          "category":"手机应用类",


          list:[
            {
              name:'天猫',
              url:'https://tshop.tmall.com/'

            },
            {
              name:'haha',
              url:'https://tshop.tmall.com/'

            },
            {
              name:'taobao',
              url:'https://tshop.tmall.com/'

            }
          ]
        }
        ,
          {
            "category":"pc端工具",

            list:[
              {
                name:'webstorm',
                url:'https://tshop.tmall.com/'

              },
              {
                name:'溜溜球',
                url:'https://tshop.tmall.com/'

              },
              {
                name:'Hbuilder',
                url:'https://tshop.tmall.com/'

              },
              {
                name:'atom',
                url:'https://tshop.tmall.com/'

              }

            ]
          }
        ]
      }

      }

  }
</script>
<style scoped>
  .container{
    width:100%;
  }
.index-left{

  margin-top:20px;
  margin-left:100px;
  width:400px;
  height:400px;
}
  .index-title{
width:200px;
    background-color: green;
    height:30px;
    text-align: center;
    line-height:30px;
  }
  .category{
  margin-left:15px;

  }
  .ulchuli{
    margin-top:5px;
    margin-left:25px;
  }
  .anone{
    text-decoration: none;
    color:black;
  }
  .index-right{

  }
</style>
