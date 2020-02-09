<!--  -->
<template>
  <div class="Taber">
    <div>
      <transition :name="fade">
        <router-view class="Router" />
      </transition>
    </div>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
    ></cube-tab-bar>
    <span class="sphjv">{{countsum}}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fade: "slide-right",
      selectedLabelDefault: "首页",
      tabs: [
        {
          label: "首页",
          icon: "cubeic-home"
        },
        {
          label: "分类",
          icon: "cubeic-tag"
        },
        {
          label: "搜索",
          icon: "cubeic-search"
        },
        {
          label: "购物车",
          icon: "cubeic-mall"
        },
        {
          label: "我的",
          icon: "cubeic-person"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      countsum: "countsum"
    })
  },
  components: {},
  mounted() {
    if (window.sessionStorage.getItem("label") == null) {
      this.selectedLabelDefault = "首页";
      this.$router.push({ path: "/taber/index" });
    } else {
      this.selectedLabelDefault = window.sessionStorage.getItem("label");
    }
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
    },
    // 点击与自身不同的其他导航
    changeHandler(label) {
      window.sessionStorage.setItem("label", label);
      // if you clicked different tab, this methods can be emitte
      switch (label) {
        case "首页":
          this.$router.push({ path: "/taber/index" });

          break;
        case "分类":
          this.$router.push({ path: "/taber/classfig" });

          break;
        case "搜索":
          this.$router.push({ path: "/taber/seek" });

          break;
        case "购物车":
          this.$router.push({ path: "/taber/cart" });

          break;
        case "我的":
          this.$router.push({ path: "/taber/wode" });

          break;
      }
    }
  }
};
</script>
<style lang='stylus' scoped>
.Taber {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  div:nth-of-type(1) {
    flex: 1;
  }

  div:nth-of-type(2) {
    height: 10vh;
    font-size: 0.5em;
    // justify-content: flex-end;
  }
}

.sphjv {
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  position: fixed;
  top: 91vh;
  right: 20%;
  z-index: 1000;
  text-align: center;
  border-radius: 50%;
  background-color: red;
  color: #fff;
}

.Router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webbkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-right-enter, .slide-left-leave-active {
  opacity: 0;
  -webbkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>