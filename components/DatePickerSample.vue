<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">
        Datepicker
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/date-pickers"
        source="https://github.com/reireias/vuetifier/blob/master/components/DatePickerSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs12>
      <v-date-picker
        v-model="value"
        header-color="primary"
        :dark="$vuetify.theme.dark"
      ></v-date-picker>
    </v-flex>
  </v-layout>
</template>

<script>
import LinkButtons from '@/components/LinkButtons'
export default {
  components: {
    LinkButtons,
  },
  props: {
    value: {
      type: String,
      default: (process.env.NODE_ENV !== 'test'
        ? new Date()
        : new Date('2019-01-01')
      )
        .toISOString()
        .substr(0, 10),
      required: false,
    },
  },
}
</script>
