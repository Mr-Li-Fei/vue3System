<template>
   <div class="header">
      <div class="left">
         <el-icon @click="onChangeAsideStatus"><Menu /></el-icon>
         <span style="margin-left: 10px;">企业门户网站</span>
      </div>
      <div class="right">
        <span> 欢迎 admin </span>
        <el-dropdown>
            <span class="el-dropdown-link">
               <el-icon size="20" color="#ccc"><User /></el-icon>
            </span>
            <template #dropdown>
               <el-dropdown-menu>
                  <el-dropdown-item @click="onJumpToProfile">个人中心</el-dropdown-item>
                  <el-dropdown-item @click="onSignOut">退出</el-dropdown-item>
               </el-dropdown-menu>
            </template>
         </el-dropdown>
      </div>
      <!-- <el-radio-group class="header-cont" v-model="isCollapse"  @change="onChangeAsideStatus">
         <el-radio-button :value="false">expand</el-radio-button>
         <el-radio-button :value="true">collapse</el-radio-button>
      </el-radio-group> -->
   </div>
</template>
<style scoped>
/* .header-cont {
   margin-left: 10px;
   margin-bottom: 20px;
} */
.header {
   background-color: #2d3a4b;
   height: 50px;
   color: #ccc;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-right: 5px;
   padding-left: 5px;
}
.left {
   display: flex;
   i {
      margin: auto
   }
}

</style>

<script setup>
import { ref } from 'vue';
import { useCoreStore } from '@/stores/core.pinia.js' 
import { Menu, User } from "@element-plus/icons-vue"
import { useRouter } from "vue-router"

const coreStore = useCoreStore();
const router = useRouter();

// const isCollapse = ref(true);

const onChangeAsideStatus = () => {
   console.log(coreStore.isCollapse);
   coreStore.setIsCollapse(!(coreStore.isCollapse));
}

const onJumpToProfile = () => {
   router.push('/main/profile');
}

const onSignOut = () => {
   localStorage.removeItem('token')
   router.push('/login');
}
</script>