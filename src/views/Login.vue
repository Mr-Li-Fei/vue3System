<template>
  <div class="login-container">
    <!-- <h1>This is an Login page</h1>
    <button @click="addToken">ADD Token</button> -->
    <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" :options="options" />
    <el-form 
      ref="loginFormRef" 
      style="max-width: 600px" 
      :model="loginForm" 
      status-icon 
      :rules="loginRules" 
      label-width="auto"
      class="loginForm"
    >
      <el-form-item label="name" prop="name">
        <el-input v-model="loginForm.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="password" prop="password">
        <el-input v-model="loginForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.login-container {
}
.loginForm {
  width: 500px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(0,0,0,0.5);
  color: white;
}
</style>

<script setup>
import { reactive, ref } from 'vue';
import { options } from '@/shared/config/login-background.config'
const loginForm = reactive({
  name: '',
  password: '',
});

const loginFormRef = ref();

const loginRules = reactive({
  name: [
    {required: true, message: '用户名不能为空!', trigger: true,}
  ],
  password: [
    {required: true, message: '密码不能为空!', trigger: true,}
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
