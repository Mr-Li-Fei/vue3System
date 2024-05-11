<template>
   <div>个人中心</div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
   axios.get('/adminapi/user/list', () => {
      console.log('ok');
   });
})
</script>