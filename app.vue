<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script>

</script>
<style>
html, body {
  height: 100%;
  margin: 0;
  scroll-behavior: smooth;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.v-container {
  scroll-snap-align: start;
}

</style>