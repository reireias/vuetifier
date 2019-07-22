<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-xs-center xs12>
      <div class="title-text display-2 font-weight-light">
        Radio Button
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/radios"
        source="https://github.com/reireias/vuetifier/blob/master/components/RadioButtonSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-xs-center xs12>
      <v-radio-group v-model="radio" class="centered-radio" row>
        <v-radio
          v-for="(color, index) in colors"
          :key="color"
          :value="index"
          :label="color"
          :color="color"
          :dark="dark"
        ></v-radio>
      </v-radio-group>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import LinkButtons from '@/components/LinkButtons'
export default {
  components: {
    LinkButtons
  },
  data() {
    return {
      colors: ['primary', 'secondary', 'accent'],
      radio: 0
    }
  },
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>

<style>
.centered-radio {
  align-items: center;
  display: inline-block;
}
</style>
