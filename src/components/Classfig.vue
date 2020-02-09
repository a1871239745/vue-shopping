<!--  -->
<template>
  <div class="swipe-wrapper">
    <cube-scroll class="fenlei">
      <ul>
        <li
          v-for="(list,index) in tabls"
          :key="index"
          @click="selxiao(index)"
          :class="list.active?'active':''"
        >{{list.name}}</li>
      </ul>
    </cube-scroll>
    <cube-scroll class="shangping">
      <ul>
        <li v-for="(list,index) in tlins" :key="index">
          <img :src="list.image" />
          <p>
            {{list.label}}
            <i class="cubeic-add" @click="addCate($event,list)"></i>
          </p>
        </li>
      </ul>
    </cube-scroll>
    <div class="bell-wrap">
      <transition @before-enter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
        <div class="bell" v-show="bell.show">
          <div class="inner">
            <i class="cubeic-add"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// vuex快速取值方法

export default {
  data() {
    return {
      bell: {
        show: false,
        el: "",
        tag:''
      },
      tlins: [],
      tabls: [
        { name: "热门推荐", active: true },
        { name: "网络小说", active: false },
        { name: "都市小说", active: false },
        { name: "电脑", active: false },
        { name: "女士衣服", active: false },
        { name: "美妆口红", active: false },
        { name: "美妆口红", active: false },
        { name: "个人护肤", active: false },
        { name: "美妆口红", active: false },
        { name: "口红", active: false },
        { name: "美妆口红", active: false },
        { name: "金银财宝", active: false }
      ]
    };
  },

  components: {},
  created() {
    this.selxiaos(0);
  },
  methods: {
    //添加购物车到vuex
    addCate(e, tag) {
      if (window.localStorage.getItem("token")) {
        this.bell.tag=tag;
        
        this.bell.show = true;
        //获取点击的元素，把当前点击的属性穿入el
        this.bell.el = e.target;
      } else {
        alert("请登录后操作！！");
      }
    },
    selxiao(index) {
      //判断点击
      this.tabls.forEach((v, ind) => {
        if (index == ind) {
          v.active = true;
        } else {
          v.active = false;
        }
      });
      this.selxiaos(index);
    },
    async selxiaos(index) {
      const data = await this.$axios.get("/api/feng", {
        params: { type: index }
      });
      this.tlins = data.data;
      //   console.log(this.tlins);
    },
    //点击加入购物车动画实现
    beforeEnter(el) {
      // 动画开始让小球移动到点击的位置
      const dom = this.bell.el;
      // console.log(dom);
      //获取dom位置
      const reat = dom.getBoundingClientRect();
      // console.log(reat);
      const x=reat.left-window.innerWidth*0.7;
      const y=-(window.innerHeight-reat.top);
      el.style.display = "block";
      el.style.transform=`translate3d(0,${y}px,0)`
      const inner=document.querySelector('.inner')
       inner.style.transform=`translate3d(${x}px,0,0)`
    },
    enter(el, done) {
      // 触发动画重绘
      document.body.offsetHeight
      //动画结束 让小球回到原来的位置
      el.style.transform=`translate3d(0,0,0)`
      const inner=document.querySelector('.inner')
       inner.style.transform=`translate3d(0,0,0)`
       //过度完成后磁性事件
       el.addEventListener('transitionend',done)
    },
    afterEnter(el) {
      //结束隐藏小球
      this.bell.show=false;
      el.style.display = "none";
      this.$store.commit("addcart",  this.bell.tag);
    }
  }
};
</script>
<style lang='stylus' scoped>
// 动画
.bell-wrap {
  .bell {
    position: fixed;
    left: 70%;
    bottom: 55px;
    z-index: 1003;
    color: red;
    transition: 1s all cubic-bezier(0.49, -0.29, 0.75, 0.41);

    .inner {
      width: 12px;
      height: 12px;
      transition: 1s all linear;

      .cubeic-add {
        font-size: 60%;
      }
    }
  }
}

.swipe-wrapper {
  display: flex;
  overflow: hidden;
  height: 90vh;

  .fenlei {
    width: 30%;

    // background-color: #dddddd;
    ul li {
      border-bottom: 1px solid #dddddd;
      height: 50px;
      line-height: 50px;
      font-size: 15px;
      text-align: center;
    }
  }

  .shangping {
    width: 70%;

    ul {
      display: flex;
      flex-wrap: wrap;
      // justify-content: center;
      margin-top: 10px;
    }

    ul li {
      width: 40%;
      text-align: center;
      margin: 10px;

      img {
        width: 70px;
        border-radius: 50%;
        height: 70px;
      }

      p {
        font-size: 0.5em;
        color: #aaaaaa;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: bold;

        .cubeic-add {
          color: red;
          font-size: 120%;
        }
      }
    }
  }
}

.active {
  color: red;
}
</style>