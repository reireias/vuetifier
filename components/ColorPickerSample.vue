<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">Color Picker</div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/color-pickers"
        source="https://github.com/reireias/vuetifier/blob/master/components/ColorPickerSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs12 md6>
      <center>
        <v-color-picker v-model="color1"></v-color-picker>
      </center>
    </v-flex>
    <v-flex text-center xs12 md6>
      <center>
        <v-color-picker v-model="color2" show-swatches></v-color-picker>
      </center>
    </v-flex>
  </v-layout>
</template>

<script>
import LinkButtons from '@/components/LinkButtons'
export default {
  components: {
    LinkButtons,
  },
  data() {
    return {
      color1: '#ffffff',
      color2: '#ffffff',
    }
  },
  mounted() {
    this.color1 = this.$vuetify.theme.themes.light.primary
    this.color2 = this.$vuetify.theme.themes.light.secondary
  },
}
</script>
