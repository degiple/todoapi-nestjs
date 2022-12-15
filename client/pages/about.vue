<template>
  <div>
    <NuxtLayout name="default">
      <button @click="enableCustomLayout">Update layout</button>
    </NuxtLayout>
  </div>
</template>

<script setup>
function enableCustomLayout() {
  setPageLayout('custom');
}
definePageMeta({
  layout: false,
});
</script>