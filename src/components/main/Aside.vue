<template>
  {{coreStore.isCollapse}}
  <el-row class="tac">
    <el-col>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="coreStore.isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="main">
          <el-icon><HomeFilled /></el-icon>
          <span>首页</span>
        </el-menu-item>    
        <el-menu-item index="profile">
          <el-icon><Avatar /></el-icon>
          <span>个人中心</span>
        </el-menu-item>
        <el-sub-menu index="user"> 
          <template #title>
            <el-icon><UserFilled /></el-icon>
            <span>用户管理</span>
          </template>
          <el-menu-item>
            <span>添加用户</span>
          </el-menu-item>
          <el-menu-item>
            <span>用户列表</span>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="news"> 
          <template #title>
            <el-icon><Document /></el-icon>
            <span>新闻管理</span>
          </template>
          <el-menu-item>
            <span>添加新闻</span>
          </el-menu-item>
          <el-menu-item>
            <span>新闻列表</span>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="product"> 
          <template #title>
            <el-icon><Goods /></el-icon>
            <span>产品管理</span>
          </template>
          <el-menu-item>
            <span>添加产品</span>
          </el-menu-item>
          <el-menu-item>
            <span>产品列表</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref, computed } from 'vue';
import { HomeFilled, Avatar, Document, Goods, UserFilled } from '@element-plus/icons-vue';
import { useCoreStore } from '@/stores/core.pinia.js';
import { storeToRefs } from 'pinia';

const coreStore = useCoreStore();
// const {isCollapse} = storeToRefs(coreStore);
// console.log(coreStore);
// const isCollapse = computed(() => coreStore.isCollapse)

</script>