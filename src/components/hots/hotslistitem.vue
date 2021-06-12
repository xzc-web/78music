<template>
  <div class="comd">
    <div class="imgs">
      <img :src="product.user.avatarUrl" alt />
    </div>
    <div class="right">
      <div class="name">{{product.user.nickname}}</div>
      <div class="detail">{{product.content}}</div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "hotslistitem",
  props: {
    product: {
      Type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },

  computed: {},

  created() {}
};
</script>

<style scoped>
.comd {
  height: 60px;
  /* height: 100%; */
  width: 100%;
  position: relative;
  /* overflow: hidden; */
  margin-bottom: 20px;
}
.imgs {
  height: 40px;
  width: 20%;
  position: absolute;
  left: 14px;
  top: -5px;
}
.imgs img {
  height: 30px;
  width: 30px;
  border-radius: 15px;
}
.right {
  position: absolute;
  left: 15%;
  top: 0;
  height: 60px;
  /* overflow: hidden;
  text-overflow: ellipsis; */
}
.right .name {
  font-size: 12px;
  margin-bottom: 5px;
}
.right .detail {
  /* height: 30px; */
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  color: #000;
  font-size: 16px;
}
</style>