<template>
  <div class="home">
    <div class="search">
      <input type="text" autocomplete="off" v-model="query" @keyup.enter="searchMusic();" />
      <h3>歌曲列表</h3>
    </div>

    <div class="goodsss">
      <goodslist :goods="musicList"></goodslist>
    </div>
  </div>
</template>

<script>
import goodslist from "../../components/goods/goodslist";
import { getHomeMultidata } from "../../network/home";
export default {
  name: "home",
  data() {
    return {
      query: "",
      musicList: [],
      coverUrl: ""
    };
  },
  components: { goodslist },
  created() {},
  methods: {
    searchMusic() {
      if (this.query == 0) {
        return;
      }
      getHomeMultidata(this.query).then(res => {
        console.log(res);
        this.musicList = res.result.songs;
        // console.log(this.musicList);
      });
      // 清空搜索
      this.query = "";
    }
  }
};
</script>

<style >
.home {
  height: 100vh;
  /* height: 700px; */
  position: relative;
  background-image: url(../../assets/img/bg.jpg);
  background-size: 100% 100%;
}
.search {
  /* position: fixed; */
  width: 100%;
  height: 35px;
  /* top: 10px; */
}
input {
  width: 80%;
  height: 35px;
  border-radius: 17.5px;
  border: 1px solid #fff;
  margin-left: 10%;
  padding: 0 5%;
  background-color: #f5f5f5;
}
h3 {
  margin-top: 10px;
  margin-left: 20px;
}
.goodsss {
  position: absolute;
  overflow: scroll;
  top: 80px;
  bottom: 10px;
  left: 20px;
  right: 0;
}
</style>
