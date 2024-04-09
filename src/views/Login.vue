<template>
  <div>
    <h1>This is an Login page</h1>
    <button @click="addToken">ADD Token</button>
  </div>
</template>

<style>
</style>

<script setup>
const addToken = () => {
  localStorage.setItem('token', 'bruce!');
};
</script>
