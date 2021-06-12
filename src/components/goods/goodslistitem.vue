<template>
  <div class="good">
    <a href="javascript:;" @click="playMusic(goodsitem.id) ">
      <img src="../../assets/img/play.png" alt />
    </a>

    <b>
      <div class="song">{{goodsitem.name}}</div>
      <div class="name">{{goodsitem.artists[0].name}}</div>
    </b>

    <span>
      <i @click="playMv" v-if="goodsitem.mvid!=0"></i>
    </span>
  </div>
</template>

<script>
import {
  getHomeMultidata,
  getHomeMultidatas,
  getHomeMultidataa,
  getHomeMultidatab,
  getHomeMultidatac
} from "../../network/home";
export default {
  name: "goodslistitem",
  data() {
    return {
      musicUrl: "",
      hotComments: [],
      use: "你hao"
    };
  },
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {},
  methods: {
    imgLoad() {
      // this.$bus.$emit("itemImgLoad");
    },
    playMv() {
      // this.currentindex = null;
      // location.reload();
      this.$router.push("/profile/" + this.goodsitem.mvid);

      this.$emit("addCart");
    },
    playMusic(musicId) {
      getHomeMultidatas(musicId).then(res => {
        this.musicUrl = res.data[0].url;
        this.$emit("receive", this.musicUrl);
      });
      getHomeMultidatab(0, musicId).then(res => {
        this.hotComments = res.hotComments;

        this.$store.commit("addCart", this.hotComments);
      });
      getHomeMultidatac(musicId).then(res => {
        this.coverUrl = res.songs[0].al.picUrl;
      });
    }
  },
  components: {}
};
</script>

<style scoped>
.good {
  height: 40px;
  width: 100%;
  overflow: hidden;
  margin-top: 5px;
  /* line-height: 40px; */
}
.good a {
  /* display: block; */
  float: left;
  line-height: 40px;
  width: 17px;
  height: 17px;
  /* cursor: pointer; */
  /* background: url("../../assets/img/table.png") left -48px no-repeat; */
}
.good a img {
  height: 100%;
  width: 100%;
}
.good b {
  margin-left: 7px;
  float: left;
  width: 70%;
  /* width: 70%; */
  /* line-height: 50px; */
}
.good b .song {
  /* width: 70%; */
  overflow: hidden;
  height: 20px;
  font-size: 16px;
  color: #000000;
}
.good b .name {
  margin-top: 2px;
  height: 20px;
  font-size: 12px;
  color: #4992d7;
}
.good span {
  /* width: 10%; */
  width: 23px;
  height: 17px;
  float: right;
  margin-right: 25px;
  /* line-height: 40px; */
  /* right: 88px; */
  /* background: url("../../assets/img/table.png") left -48px no-repeat; */
}
.good span i {
  display: block;
  height: 100%;
  width: 100%;
  background: url("../../assets/img/table.png") left -48px no-repeat;
}
</style>