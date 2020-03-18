<template>
  <div ref="div" class="hide">
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.div.classList.remove('hide')
  }
}
</script>

<style>
.v-navigation-drawer {
  text-align: center;
}
.color-button-container {
  width: 40px;
  height: 40px;
}
.color-button {
  min-width: 0px !important;
  margin: 0px !important;
  height: 100% !important;
  border-radius: 0px !important;
}
.no-shadow {
  box-shadow: none !important;
}
.dialog-container {
  padding: 10px !important;
}
.hide {
  display: none;
}
</style>
