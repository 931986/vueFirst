<template>
  <div>
  <input type="text" v-model="todo"><button @click="add()" @keydown="doadd($event)">+</button>
  <br>
  <hr>
    <h2>正在进行中</h2>
  <ul>

  <li v-for="(item,key) in list" v-if="!item.checked">
   <input type="checkbox" v-model="item.checked" @change="savedata()"> {{item.todo}}---<button @click="deleteIt(key)">删除</button>
  </li>

  </ul>
    <h2>已完成</h2>
    <ul>
      <li v-for="(item,key) in list" v-if="item.checked">
     <input type="checkbox" v-model="item.checked" @change="savedata()">   {{item.todo}}---<button @click="deleteIt(key)">删除</button>
      </li>

    </ul>
  </div>
</template>
<script>
  import storage from '../model/ECmodel'
  export default{
    data(){
      return{
        todo:'',
        list:[{todo:'vue',checked:false}],

      }
    },
    methods:{
      doadd(e){
        console.log(e.keyCode);
        if(e.keyCode===13) {
          this.list.push({todo: this.todo, checked: false});
          this.todo = '';
         storage.set('list',this.list);
        }
      },
      add(){
        this.list.push({todo: this.todo, checked: false});
        this.todo = '';

        storage.set('list',this.list);
      },
      deleteIt(key){
this.list.splice(key,1);

        storage.set('list',this.list);
      },
      savedata(){

        storage.set('list',this.list);
      }
    },
    mounted(){
      var list=storage.get('list');
      if(list){
        this.list=list;
      }
    }
  }
</script>
<style>

</style>
