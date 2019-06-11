<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-xs-center xs12>
      <div class="title-text display-3 font-weight-light">
        CHeckbox
      </div>
    </v-flex>
    <v-flex text-xs-center xs12>
      <v-layout align-center justify-cente>
        <v-flex v-for="color in colors" :key="color" xs4>
          <v-checkbox
            class="centered-checkbox"
            :input-value="true"
            :color="color"
            :label="color"
            :dark="dark"
          ></v-checkbox>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      colors: ['primary', 'secondary', 'accent']
    }
  },
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>

<style>
.centered-checkbox {
  align-items: center;
  display: inline-block;
}
</style>
