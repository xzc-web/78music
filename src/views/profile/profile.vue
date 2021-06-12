<template>
  <div class="videos">
    <div class="nav">
      <a href="javascript:;" @click="back" class="back"><</a>
      <div class="pnn">视频</div>
    </div>
    <div class="video_con" v-show="showVideo">
      <video ref="video" :src="mvUrl" controls="controls"></video>
      <!-- <div class="mask" @click="closeMv"></div> -->
    </div>
  </div>
</template>

<script>
// import hotslist from "../../components/hots/hotslist";
import {
  getHomeMultidata,
  getHomeMultidatas,
  getHomeMultidataa,
  getHomeMultidatab,
  getHomeMultidatac
} from "../../network/home";
import { mapGetters } from "vuex";
// import hotslist from "../../components/hots/ hotslist";
export default {
  name: "profile",

  data() {
    return {
      mvid: null,
      mvUrl: "",
      // 显示视频播放
      showVideo: true
      // hotes: []
    };
  },
  // components: { hotslist },
  computed: {
    // cartusb() {
    //   return this.$store.state.cartusb;
    // }
    ...mapGetters(["cartusb"])
  },
  methods: {
    back() {
      this.$router.back();
    }
  },

  created() {
    this.vvid = this.$route.params.mvid;

    getHomeMultidataa(this.vvid).then(res => {
      this.mvUrl = res.data.url;
    });
  }
};
</script>

<style>
.videos {
  /* height: 250px; */
  width: 100%;
  /* background-color: url; */
  /* height: 800px; */
  height: 100vh;
  background-image: url(../../assets/img/bg2.jpg);
  background-size: 100% 100%;
}
.video_con {
  height: 250px;

  width: 100%;
  position: fixed;
  top: 50%;
  margin-top: -125px;

  /* margin: auto 0; */
  left: 0;
}
.video_con video {
  /* width: 400px; */
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.commends {
  margin-top: 250px;
  height: 300px;
}
.nav {
  width: 100%;
  height: 40px;
  background-color: #fff;

  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 2;
}
.nav .back {
  font-size: 30px;
  height: 40px;
  line-height: 40px;
  margin-left: 20px;
}
.nav .pnn {
  /* display: block; */
  /* margin: auto auto; */
  flex: 1;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #000;
}
.hotsss {
  margin-top: 50px;
}
</style>
