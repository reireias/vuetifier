<template>
  <div>
    <v-layout column justify-center align-center>
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
    </v-layout>

    <button-sample class="component"></button-sample>
    <alert-sample class="component"></alert-sample>
    <avatar-sample class="component"></avatar-sample>
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
  computed: {
    ...mapGetters(['dark'])
  },
  mounted() {
    console.log(this.$vuetify)
  }
}
</script>

<style>
.component {
  margin-bottom: 50px;
}
</style>
