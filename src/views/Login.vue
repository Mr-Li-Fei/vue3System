<template>
  <div class="login-container">
    <!-- <h1>This is an Login page</h1>
    <button @click="addToken">ADD Token</button> -->
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
        class="loginForm"
      >
        <el-form-item label="username" prop="username">
          <el-input v-model="loginForm.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input v-model="loginForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="submitForm()">登录</el-button>
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
import { reactive, ref } from 'vue';
import { options } from '@/shared/config/login-background.config'
const loginForm = reactive({
  username: '',
  password: '',
});

const loginFormRef = ref();

// 设置出发焦点得验证
const loginRules = reactive({
  username: [
    {required: true, message: '用户名不能为空!', trigger: 'blur'}
  ],
  password: [
    {required: true, message: '密码不能为空!', trigger: 'blur',}
  ]
})

const submitForm = () => {}

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};

const addToken = () => {
  localStorage.setItem('token', 'bruce!');
};
</script>
