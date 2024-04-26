<template>
   <div>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px" @change="onChangeAsideStatus">
         <el-radio-button :value="false">expand</el-radio-button>
         <el-radio-button :value="true">collapse</el-radio-button>
      </el-radio-group>
   </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCoreStore } from '@/stores/core.pinia.js' 
const { setIsCollapse } = useCoreStore();
const isCollapse = ref(false);
const onChangeAsideStatus = () => {
   // console.log(isCollapse.value);
   setIsCollapse(isCollapse.value);
}
</script>