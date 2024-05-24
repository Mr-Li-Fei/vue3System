<template>
   <div>个人中心</div>
</template>

<script setup lang="jsx">
import { onMounted } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter();
const expiredSecond = 3;

const loginOut = () => {};

onMounted(() => {
   axios.get('/adminapi/user/list')
   .then((response) => {
      console.log(response, 'home-个人中心');
   })
   .catch((error) => {
      console.log(error, 'home-个人中心');
      const errMsg = error.response.data.error;
      console.log(errMsg.includes('jwt expired'), errMsg, 'ppp');
      if(errMsg.includes('jwt expired')) {
         localStorage.removeItem('token');

         const timer = setTimeout(() => {
            router.push('/main');
         }, 5000);

         ElMessage({
            type: 'error',
            message: () => (
               <div>
                  <p>{errMsg}</p>
                  <div>
                     Token 认证失败，{expiredSecond}s 后退出登录!
                     {/* button 退出事件以后再补充， 先往下继续 */}
                     <el-button type="danger" ref='loginOut' >退出</el-button>
                  </div>
               </div>
            ),
         })
         return;
      }

      ElMessage({
         type: 'error',
         message: errMsg,
      })
   });
})
</script>