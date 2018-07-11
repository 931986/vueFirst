<template>
  <div>
    <span>请确保你的周边环境安全</span>
    <div>请输入您的密码<input type="password"></div>
    <div><mt-button type="default">submit</mt-button>
  <mt-button type="primary">submit</mt-button>
    <ul class="list"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list">{{ item.title }}</li>
    </ul>
    </div>
  </div>
</template>
<script>
  import MtButton from "../../../node_modules/mint-ui/packages/button/src/button.vue";

  export default {
    components: {MtButton},
    data() {
      return {
        list: [],
        j: 0,
        page: 1,
        loading: false,
        finished: [{title:'Nothing but you do better,GoodBye'}],
      }
    },
    methods: {
      loadMore() {
        this.loading = true;
        var api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=" + this.page;
        this.$http.get(api).then((res) => {
          this.list = this.list.concat(res.body.result);
          this.loading = false;
          ++this.page;
          if (res.body.result.length < 10) {
            this.loading = true;
          this.quit();

          }
          else {
            this.loading = false;
          }
        }, (err) => {
          console.log(err);
        });

      },
      quit(){
      this.list=this.list.concat(this.finished);
      }
    }
  }
</script>
<style scoped>
.list{
  list-style-type: none;
  margin-left:10px;
  margin-top:20px;
}
</style>
