//请求拦截
import router from './router'
import store from './store'
import axios from 'axios'

export default function setAxios(){
    axios.interceptors.request.use(config=>{
        if(store.state.token){
            config.headers.token=store.state.token
        };
        return config;
    });
    axios.interceptors.response.use(response=>{
        //拦截状态码操作
        if(response.status==200){
           const data=response.data;
           if(data.code==-1){
               store.commit('settoken','');
               localStorage.removeItem('token')
               router.replace({path:'/logo'})
           }
           return data;
        }
        return response;
    })
}