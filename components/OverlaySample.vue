<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">
        <v-icon large color="accent">fiber_new</v-icon>
        Overlay
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/overlays"
        source="https://github.com/reireias/vuetifier/blob/master/components/OverlaySample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs12>
      <center>
        <v-card height="200" width="250">
          <v-layout justify-center wrap>
            <v-btn color="primary" class="mt-12" @click="overlay = !overlay">
              Show Overlay
            </v-btn>
            <v-overlay :absolute="absolute" :value="overlay">
              <v-btn color="secondary" @click="overlay = false">
                Hide Overlay
              </v-btn>
            </v-overlay>
          </v-layout>
        </v-card>
      </center>
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
      absolute: true,
      overlay: false
    }
  },
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>
