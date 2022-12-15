<template>
  <h1>Main Page</h1>
  <!-- <img src="/penguin.png" alt="penguin" /> -->
  <v-btn class="ma-5" color="primary">my-btn</v-btn>
  <div>
    <div>Count:{{ count }}</div>
    <div>
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>
  </div>
</template>

<script setup>
const { count, inc, dec } = useCounter(100);
</script>