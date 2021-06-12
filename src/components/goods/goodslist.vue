<template>
  <div class="goods">
    <goodslistitem v-for="(item,index) in goods" :key="index" :goodsitem="item" @receive="btnclick"></goodslistitem>
    <div class="audio">
      <audio ref="audio" :src="musicUrl1" controls autoplay loop class="myaudio" @receive="form(e)"></audio>

      <div @click="hots" class="pn">评论</div>
    </div>
  </div>
</template>

<script>
import goodslistitem from "./goodslistitem";
export default {
  name: "goodslist",
  data() {
    return {
      musicUrl1: ""
    };
  },
  components: {
    goodslistitem
  },
  props: {
    goods: {
      type: Array,
      default() {}
    }
  },

  mounted() {
    // this.$children[0].child();
  },
  created() {},

  methods: {
    // form(use) {
    //   this.musicUrl1 = use;
    //   Console.log(this.musicUrl1);
    // }
    hots() {
      this.$router.push("/hotss");
    },
    btnclick(musicUrl) {
      this.musicUrl1 = musicUrl;
    }
  }
};
</script>

<style scoped>
.goods {
  /* height: 300px; */
  /* overflow: hidden; */
  /* margin-top: 40px; */
}
.audio {
  display: flex;
  height: 60px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: -7px;
  background-color: #f1e3d6;
  z-index: 2;
}
.audio audio {
  /* float: left; */
  flex: 1;
  line-height: 60px;
  /* color: #f1e3d6;
   */
  background-color: #f1e3d6;
}
.pn {
  /* float: right; */
  /* flex: 3 */
  line-height: 60px;
  /* margin-left: 10px; */
  text-align: center;
  width: 40px;
  height: 30px;
  color: #000;
}
</style>