<!--  -->
<template>
  <div>
    <div class="shu" v-for="(items,index) in item" :key="index">
      {{items.name}}
      <div class="shulian">
        <i class="cubeic-remove" @click="removeCate(index)"></i>
        {{items.conu}}
        <i class="cubeic-add" @click="addCate(index)"></i>
      </div>
    </div>
    <cube-button @click="qingko(1)">下单</cube-button>
    <cube-button @click="qingko(2)">清空购物车</cube-button>
  </div>
</template>

<script>
// 引入Vuex封装好的快速拿到数据的方法
import { mapState } from "vuex";
export default {
  data() {
    return {
      // item: [
      //   {
      //     name: "小米手机",
      //     conu: 5
      //   },
      //   {
      //     name: "华为手机",
      //     conu: 3
      //   }
      // ]
    };
  },
  //vuex计算属性快速拿值
  computed: {
    ...mapState({
      item: state => state.cartarry
    })
  },
  components: {},

  methods: {
    qingko(v) {
      if (v == 1) {
        alert("下单功能因为没有api没有写");
      } else if (v == 2) {
        this.$store.commit("qinko");
      }
    },
    removeCate(index) {
      this.$store.commit("removeCate", index);
    },
    addCate(index) {
      this.$store.commit("addCates", index);
    }
  }
};
</script>
<style lang='stylus' scoped>
.shu {
  border: 1px solid slategrey;
  padding: 10px;
  margin: 10px;
  background-color: #33FFAA;
  // color #ffffff
}

.shulian {
  float: right;

  .cubeic-remove {
    color: red;
  }
}

button {
  font-size: 14px;
  margin: 10px;
  width: 50%;
}
</style>