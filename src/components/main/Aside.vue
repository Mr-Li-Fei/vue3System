<template>
  <el-aside width="200px">
    <el-scrollbar height="800px">
      <!-- router=true 开启以menu index为router path 的模式, 这样就不用再自己写跳转按钮功能了，
          直接点击nav menu 就可以跳转路由了   -->
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :router="true"
        :default-active="route.fullPath"
      >
        <el-menu-item index="/main">
          <el-icon><HomeFilled /></el-icon>
          <span>首页</span>
        </el-menu-item>    
        <el-menu-item index="/main/profile">
          <el-icon><Avatar /></el-icon>
          <span>个人中心</span>
        </el-menu-item>
        <el-sub-menu index="users"> 
          <template #title>
            <el-icon><UserFilled /></el-icon>
            <span>用户管理</span>
          </template>
          <el-menu-item index="/main/user-add">
            <span>添加用户</span>
          </el-menu-item>
          <el-menu-item index="/main/user-list">
            <span>用户列表</span>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="news"> 
          <template #title>
            <el-icon><Document /></el-icon>
            <span>新闻管理</span>
          </template>
          <el-menu-item index="/main/news-add">
            <span>添加新闻</span>
          </el-menu-item>
          <el-menu-item index="/main/news-list">
            <span>新闻列表</span>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="products"> 
          <template #title>
            <el-icon><Goods /></el-icon>
            <span>产品管理</span>
          </template>
          <el-menu-item index="/main/products-add">
            <span>添加产品</span>
          </el-menu-item>
          <el-menu-item index="/main/products-list">
            <span>产品列表</span>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="products"> 
          <template #title>
            <el-icon><Goods /></el-icon>
            <span>产品管理</span>
          </template>
          <el-menu-item index="/main/products-add">
            <span>添加产品</span>
          </el-menu-item>
          <el-menu-item index="/main/products-list">
            <span>产品列表</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup>
import { ref, computed, onUpdated, watch } from 'vue';
import { HomeFilled, Avatar, Document, Goods, UserFilled } from '@element-plus/icons-vue';
import { useCoreStore } from '@/stores/core.pinia.js';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const route = useRoute();

// const coreStore = useCoreStore();
const coreStore = useCoreStore();
const {isCollapse} = storeToRefs(coreStore);
</script>