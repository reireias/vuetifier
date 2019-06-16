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
    </v-layout>

    <v-layout row wrap>
      <v-flex v-for="part in parts" :key="part.name" xs12 md6>
        <v-card height="100%">
          <component :is="part" class="component"></component>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// Form Controls
import AutoCompleteSample from '@/components/AutoCompleteSample'
import CheckBoxSample from '@/components/CheckBoxSample'
import DatePickerSample from '@/components/DatePickerSample'
import FormsSample from '@/components/FormsSample'
import RadioButtonSample from '@/components/RadioButtonSample'
import SelectSample from '@/components/SelectSample'
import SliderSample from '@/components/SliderSample'
import SlideToggleSample from '@/components/SlideToggleSample'

import ButtonSample from '@/components/ButtonSample'
import AlertSample from '@/components/AlertSample'
import AvatarSample from '@/components/AvatarSample'
import { mapGetters } from 'vuex'
export default {
  components: {
    AutoCompleteSample,
    CheckBoxSample,
    DatePickerSample,
    FormsSample,
    RadioButtonSample,
    SelectSample,
    SlideToggleSample,
    SliderSample,
    ButtonSample,
    AlertSample,
    AvatarSample
  },
  data() {
    return {
      parts: [
        AutoCompleteSample,
        CheckBoxSample,
        DatePickerSample,
        FormsSample,
        RadioButtonSample,
        SelectSample,
        ButtonSample,
        AlertSample,
        AvatarSample
      ]
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
