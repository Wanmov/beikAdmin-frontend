<template>
  <div class="box" />
</template>
<script setup lang="ts">
import variables from "@/styles/variables.module.scss";
console.log(variables.bgColor);
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: $bg-color;
}
</style>
