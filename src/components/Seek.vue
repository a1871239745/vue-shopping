<!--  -->
<template>
  <div>
    <cube-input v-model="value" placeholder="请输入....." class="cube-input" :clearable="true"></cube-input>
    <button   class="cube-button">搜索</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },

  components: {},
  methods: {}
};
</script>
<style lang='stylus' scoped>
.cube-input {
  width: 60vw;
  border: #dddddd;
  float left
  margin 10px
}
.cube-button{
  width 20vw
  height 1rem
  line-height .5rem
  float left
  margin 10px
}
</style>