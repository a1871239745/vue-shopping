
<template>
  <div>
    <router-link to="/logo">点击登录</router-link>
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //表单绑定的数据
      model: {
        username: "",
        password: ""
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
              min:5,
              max:10,
              type:'string'
            },
            //对应的提示
            messages:{
              required:"用户名不能为空",
              min:"输入的值不能小于5",
              max:"输入的值不能大于10"
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
               type:'password',
              eye:{
                  open:false
              }
            },
            // 加验证
            rules: {
              required: true,
              min:3,
              max:16,
              type:'string'
            },
            //对应的提示
            messages:{
              required:"用户名不能为空",
              min:"输入的值不能小于6",
              max:"输入的值不能大于16"
            },
            // 什么时候生效
            // validating when blur
            trigger: "blur"
          },
          {
              
              type:'submit',
              label:"注册"
          }
        ]
      }
    };
  },

  components: {},

  methods: {
      async submitHandler(e){
          e.preventDefault();
          const data=await this.$axios.get('/api/register',{params:this.model});
          if(data.success==true){
            this.$router.push({path:'/logo'});
          }else if(data.success==false){
            alert(data.message)
          }
      }
  }
};
</script>
<style lang='styls' scoped>
</style>