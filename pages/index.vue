<template>
  <div>
    <v-layout column justify-center align-center>
      <v-flex xs12>
        <div class="title-text display-4 font-weight-thin">
          Vuetifier
        </div>
      </v-flex>
    </v-layout>

    <button-sample></button-sample>
  </div>
</template>

<script>
import ButtonSample from '@/components/ButtonSample'
import { mapGetters } from 'vuex'
export default {
  components: {
    ButtonSample
  },
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>
