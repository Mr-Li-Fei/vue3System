<script setup>
import Aside from '@/components/main/Aside.vue'
import Header from '@/components/main/Header.vue'
</script>

<template>
  <div>
    <el-container>
      <Aside />
      <el-container direction="vertical">
        <Header />
        <el-main>
          main
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
