<template>
  <div class="ho">
    <div class="nav">
      <a href="javascript:;" @click="back" class="back"><</a>
      <div class="pnn">评论</div>
    </div>
    <hotslist class="hotsss"></hotslist>
  </div>
</template>

<script>
import hotslist from "../../components/hots/hotslist";
export default {
  name: "hotss",
  components: { hotslist },
  data() {
    return {};
  },
  computed: {},

  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.ho {
  height: 100vh;
  background-image: url(../../assets/img/bg1.jpg);
  background-size: 100% 100%;
}
.nav {
  width: 100%;
  height: 40px;
  background-color: #ecab1d;

  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  /* z-index: 2; */
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
  margin-top: 40px;
  height: 667px;
  overflow: scroll;
}
</style>