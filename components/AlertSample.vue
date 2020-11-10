<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">Alert</div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/alerts"
        source="https://github.com/reireias/vuetifier/blob/master/components/AlertSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs12>
      <v-alert :value="true" type="success"> Success alert. </v-alert>
      <v-alert :value="true" type="info"> Info alert. </v-alert>
      <v-alert :value="true" type="warning"> Warning alert. </v-alert>
      <v-alert :value="true" type="error"> Error alert. </v-alert>
      <v-alert :value="true" type="success" outlined>
        Outlined success alert.
      </v-alert>
      <v-alert :value="true" type="info" outlined>
        Outlined info alert.
      </v-alert>
      <v-alert :value="true" type="warning" outlined>
        Outlined warning alert.
      </v-alert>
      <v-alert :value="true" type="error" outlined>
        Outlined error alert.
      </v-alert>
    </v-flex>
  </v-layout>
</template>

<script>
import LinkButtons from '@/components/LinkButtons'
export default {
  components: {
    LinkButtons,
  },
}
</script>
