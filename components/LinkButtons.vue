<template>
  <div class="link-button-container">
    <v-btn
      class="link-button"
      text
      icon
      color="primary"
      :dark="$vuetify.theme.dark"
      :href="document"
      target="_blank"
    >
      <v-icon>description</v-icon>
    </v-btn>
    <v-btn
      class="link-button"
      text
      icon
      color="primary"
      :dark="$vuetify.theme.dark"
      :href="source"
      target="_blank"
    >
      <v-icon>code</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    document: {
      type: String,
      default: '',
    },
    source: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
.link-button-container {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
