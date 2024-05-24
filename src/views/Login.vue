<template>
  <div class="login-container">
    <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" :options="options" />
    <div class="formContainer">
      <h3 class="login-form-title">企业门户网站管理系统</h3>
      <el-form 
        ref="loginFormRef" 
        style="max-width: 600px" 
        :model="loginForm" 
        status-icon 
        :rules="loginRules" 
        label-width="auto"
        label-position="left"
        :class="['loginForm', 'demo-ruleForm']"
      >
        <el-form-item label="username" prop="username">
          <el-input v-model="loginForm.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input v-model="loginForm.password" type="password" autocomplete="off" show-password/>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="onLogin()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
/* .login-container {
  padding: 0;
  margin: 0;
} */
.formContainer {
  width: 500px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  color: white;
  transform: translate(-50%, -50%);
  background-color: rgb(0,0,0,0.5);

  .login-form-title {
    text-align: center;
  }

  .loginForm {
    width: 60%;
    margin: 0 auto;
  }

  .login-btn {
    margin-left: 30%;
  }
}
/* 使用::deep .selector or :deep(selector), 深度选择器, 因为scoped 得缘故, 我们需要使用深度选择器,
*  在父组件得层次来设置子组件得样式
*/
:deep(.el-form-item__label) {
  color: white
}
</style>

<script setup>
import { onBeforeMount, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { options } from '@/shared/config/login-background.config'
import axios from 'axios';
import { ElMessage } from 'element-plus'

const loginForm = reactive({
  username: '',
  password: '',
});

const loginFormRef = ref();

const router = useRouter();

// 设置出发焦点得验证
const loginRules = reactive({
  username: [
    {required: true, message: '用户名不能为空!', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '密码不能为空!', trigger: 'blur',}
  ]
})

const onLogin = () => {
  // 触发form 表单的验证
  loginFormRef.value.validate(valid => {
    if(valid) {
      // 走到这里说明,输入的格式是正确的,可以进行下一步

      // 正常请求http://localhost:3000/users会报跨域的问题，　所以需要设置反向代理， 单文件组件中， 向本地/users 请求
      //　在vite.config.js 中设置 proxy 代理， 设置所有/users请求 , 都会走对应的请url
      axios.post('/adminapi/user/login', loginForm)
      .then((response) => {
        console.log(response, 'rspons');
        if(response.data.status === 1) {
          // 再将loginForm 发送到后端, 前端接收到之后, 设置localstorage
          router.push('/main');
        }
      }).catch((error) => {
          // 处理 用户名或者密码不对得状况
          console.log(error, 'error');
          ElMessage({
            showClose: true,
            message: error.response.data.error,
            type: 'error',
          })
      });
    } else {
      console.log('用户名或者密码不能为空!');
    }
  })
}

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};

const keyDown = (e) => {
  // 13 和 100 分别对应着英文键盘和数字键盘上得enter
  if(e.keyCode == 13 || e.keyCode == 100) {
    onLogin();
  };
}

onMounted(() => {
  window.addEventListener('keydown', keyDown);
})

onBeforeMount(() => {
  window.removeEventListener('keyDown', keyDown);
})

</script>
