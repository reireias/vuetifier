<template>
  <v-app>
    <v-content>
      <v-container fluid grid-list-md>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {}
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
</style>
