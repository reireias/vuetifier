<template>
  <div>
    <v-layout column justify-center align-center style="margin-bottom: 20px;">
      <v-flex xs12>
        <div class="primary--text title-text display-4 font-weight-light">
          Vuetifier
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="accent--text title">
          Vuetify UI component samples with theme color.
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="title">Vuetify: {{ version }}</div>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card height="100%">
          <button-sample class="component"></button-sample>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card height="100%">
          <alert-sample class="component"></alert-sample>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card height="100%">
          <avatar-sample class="component"></avatar-sample>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import ButtonSample from '@/components/ButtonSample'
import AlertSample from '@/components/AlertSample'
import AvatarSample from '@/components/AvatarSample'
import { mapGetters } from 'vuex'
export default {
  components: {
    ButtonSample,
    AlertSample,
    AvatarSample
  },
  data() {
    return {
      version: process.env.vuetifyVersion
    }
  },
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>

<style>
.component {
  padding: 20px;
}
</style>
