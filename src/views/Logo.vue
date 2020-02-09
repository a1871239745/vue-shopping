
<template>
  <div>
    <div class="nvas">
      <img src="http://img2.imgtn.bdimg.com/it/u=3105600238,693167464&fm=26&gp=0.jpg" />
    </div>
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //表单绑定的数据
      model: {
        username: "admin",
        password: "123456"
      },
      //表单自定义创建
      schema: {
        fields: [
          {
            type: "input",
            // modelKey为数据绑定
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            // 加验证
            rules: {
              required: true,
              min: 3,
              max: 10,
              type: "string"
            },
            //对应的提示
            messages: {
              required: "用户名不能为空",
              min: "输入的值不能小于5",
              max: "输入的值不能大于10"
            },
            // 什么时候生效
            // validating when blur
            trigger: "blur"
          },
          {
            type: "input",
            // modelKey为数据绑定
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
              type: "password",
              eye: {
                open: false
              }
            },
            // 加验证
            rules: {
              required: true,
              min: 6,
              max: 16,
              type: "string"
            },
            //对应的提示
            messages: {
              required: "用户名不能为空",
              min: "输入的值不能小于6",
              max: "输入的值不能大于16"
            },
            // 什么时候生效
            // validating when blur
            trigger: "blur"
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    };
  },

  components: {},

  methods: {
    async submitHandler(e) {
      e.preventDefault();
      try {
        const reslu = await this.$axios.get("/api/logo", {
          params: this.model
        });
        if (reslu.code == 0) {
          this.$store.commit("settoken", reslu.token);
          window.localStorage.setItem("token", reslu.token);

          //判断路由是否带参数
          if(this.$route.query.redirect){
              this.$router.push({ path: this.$route.query.redirect });
          }else{
              if (sessionStorage.getItem('label')=="我的") {
                this.$router.push({ path: "/taber/wode" });
              }else{
                this.$router.push({ path: "/taber/index" });
              }
          }
        } else if (reslu.code == 1) {
          alert(reslu.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style lang='stylus' scoped>
.nvas {
  text-align: center;
  margin: 10px 0px;
}

.nvas img {
  width: 100%;
  border-radius: 50%;
}
</style>