<!--  -->
<template>
  <div class="Index">
    <!-- 轮播图 -->
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <a :href="item.url">
          <img :src="item.image" />
        </a>
      </cube-slide-item>
    </cube-slide>
    <!-- 分类 -->
    <cube-slide ref="slides" :data="linsts" :auto-play="false" :showDots="false">
      <cube-slide-item v-for="(linst, index) in linsts" :key="index">
        <ul class="linstul">
          <li class="linstli" v-for="(lins,index) in linst" :key="index">
            <a :href="lins.url">
              <img :src="lins.image" />
              <p>{{lins.label}}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      linsts: []
    };
  },

  components: {},
  methods: {
    changePage(current) {
      //   console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    }
  },
  async created() {
    try {
      const items = await this.$axios.get("/api/lunbo");
      this.items = items.user;
      const lists = await this.$axios.get("/api/fenglun");
      this.linsts = lists.shujv;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>
<style lang='stylus' scoped>
.linstul {
  margin-top: 25px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.linstli {
  text-align: center;
  width: 20%;
  margin-bottom: 15px;
  justify-content: center;

  img {
    width: 1em;
    height: 1em;
    border-radius: 50%;
  }

  p {
    font-size: 0.4rem;
    margin-top: 10px;
  }
}
</style>