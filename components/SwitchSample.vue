<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">
        Switch
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/selection-controls#switches-boolean"
        source="https://github.com/reireias/vuetifier/blob/master/components/SwitchSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs8 offset-xs4>
      <v-switch v-model="primary" label="Primary" color="primary"></v-switch>
    </v-flex>
    <v-flex text-center xs8 offset-xs4>
      <v-switch
        v-model="secondary"
        label="Secondary"
        color="secondary"
      ></v-switch>
    </v-flex>
    <v-flex text-center xs8 offset-xs4>
      <v-switch v-model="accent" label="Accent" color="accent"></v-switch>
    </v-flex>
  </v-layout>
</template>

<script>
import LinkButtons from '@/components/LinkButtons'
export default {
  components: {
    LinkButtons
  },
  data() {
    return {
      primary: true,
      secondary: true,
      accent: true
    }
  }
}
</script>
