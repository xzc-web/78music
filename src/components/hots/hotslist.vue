<template>
  <div class="h">
    <hotslistitem v-for="(item,index) in cartusb" :key="index" :product="item">{{item}}</hotslistitem>
  </div>
</template>

<script>
import hotslistitem from "./hotslistitem";
import { mapGetters } from "vuex";
export default {
  name: "hotslist",
  components: { hotslistitem },
  data() {
    return {};
  },
  computed: {
    // cartusb() {
    //   return this.$store.state.cartusb;
    // }
    ...mapGetters(["cartusb"])
  },

  created() {}
};
</script>

<style scoped>
.h {
  margin-top: 10px;
}
</style>