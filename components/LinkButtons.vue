<template>
  <div class="link-button-container">
    <v-btn
      class="link-button"
      flat
      icon
      color="primary"
      :dark="dark"
      :href="document"
      target="_blank"
    >
      <v-icon>description</v-icon>
    </v-btn>
    <v-btn
      class="link-button"
      flat
      icon
      color="primary"
      :dark="dark"
      :href="source"
      target="_blank"
    >
      <v-icon>code</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    document: {
      type: String,
      default: ''
    },
    source: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>

<style>
.link-button-container {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
