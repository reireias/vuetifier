<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-xs-center xs12>
      <div class="title-text display-2 font-weight-light">
        Alert
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/alerts"
        source="https://github.com/reireias/vuetifier/blob/master/components/AlertSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-xs-center xs12>
      <v-alert :value="true" type="success">
        Success alert.
      </v-alert>
      <v-alert :value="true" type="info">
        Info alert.
      </v-alert>
      <v-alert :value="true" type="warning">
        Warning alert.
      </v-alert>
      <v-alert :value="true" type="error">
        Error alert.
      </v-alert>
      <v-alert :value="true" type="success" outline>
        Outline success alert.
      </v-alert>
      <v-alert :value="true" type="info" outline>
        Outline info alert.
      </v-alert>
      <v-alert :value="true" type="warning" outline>
        Outline warning alert.
      </v-alert>
      <v-alert :value="true" type="error" outline>
        Outline error alert.
      </v-alert>
    </v-flex>
  </v-layout>
</template>

<script>
import LinkButtons from '@/components/LinkButtons'
import { mapGetters } from 'vuex'
export default {
  components: {
    LinkButtons
  },
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>
