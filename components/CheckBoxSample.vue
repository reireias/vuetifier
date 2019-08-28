<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">
        Checkbox
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/checkboxes"
        source="https://github.com/reireias/vuetifier/blob/master/components/CheckBoxSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs12>
      <v-layout align-center justify-cente>
        <v-flex v-for="color in colors" :key="color" xs4>
          <v-checkbox
            class="centered-checkbox"
            :input-value="true"
            :color="color"
            :label="color"
            :dark="$vuetify.theme.dark"
          ></v-checkbox>
        </v-flex>
      </v-layout>
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
      colors: ['primary', 'secondary', 'accent']
    }
  }
}
</script>

<style>
.centered-checkbox {
  align-items: center;
  display: inline-block;
}
</style>
