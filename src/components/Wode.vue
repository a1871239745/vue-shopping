<!--  -->
<template>
  <div class="warp">
    <img
      class="heds"
      src="http://i1.sinaimg.cn/ent/d/2008-06-04/U105P28T3D2048907F326DT20080604225106.jpg"
    />
    <div class="Uls">
      <ul class="ullist">
        <li
          class="lilist"
          v-for="(item,index) in list"
          @click="tuias(item)"
          :key="index"
        >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "关于我", type: "gyw" },
        { name: "退出", type: "tc" }
      ]
    };
  },

  components: {},

  methods: {
    tuias(item) {
      if (item.type == "tc") {
        this.$store.commit("settoken", "");
        localStorage.removeItem("token");

        this.$router.push({ path: "/logo" });
      } else if (item.type == "gyw") {
        this.$createDialog({
          type: "alert",
          title: "大家好",
          content: "我是邓某某，邮箱：1871239745@qq.com",
          icon: "cubeic-alert"
        }).show();
      }
    }
  }
};
</script>
<style lang='stylus' scoped>
.warp {
  display: flex;
  flex-direction: column;

  .heds {
    width: 100%;
    height: 7rem;
  }

  .Uls .ullist .lilist {
    display: flex;
    margin: 10px;
    flex-direction: column;
    border-bottom: 1px solid #dddddd;
    height: 50px;
    line-height: 50px;
    font-size: 0.5rem;
  }
}
</style>