<template>
  <div id="app">
    <br>
  <son/>

    <br>
<router-view></router-view>
  </div>
  <!--<Headers/>

    <router-view/>
    <Footers/>
    <comA/>-->
</template>

<script>

import son from './components/son.vue'
  import Headers from './components/son.vue'
  import Footers from './components/footer.vue'
  import todolist from './components/todolist.vue'
  import detai from './components/details.vue'
import detailNews from './components/detailsNews.vue'
import lay1 from './pages/lay1.vue'
  import lay2 from './pages/lay2.vue'
export default {
  name: 'App',
  components:{
    Headers,Footers,todolist,detai,lay1,lay2,son,detailNews
  }

}
</script>

<style>

*{
  margin:0;
  padding:0;
}
</style>
