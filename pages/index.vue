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
        <div class="title">Vuetify {{ version }}</div>
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
import { mapGetters } from 'vuex'
import AutoCompleteSample from '@/components/AutoCompleteSample'
import CheckBoxSample from '@/components/CheckBoxSample'
import DatePickerSample from '@/components/DatePickerSample'
import FormsSample from '@/components/FormsSample'
import RadioButtonSample from '@/components/RadioButtonSample'
import SelectSample from '@/components/SelectSample'
import SliderSample from '@/components/SliderSample'
import SwitchSample from '@/components/SwitchSample'
import ButtonSample from '@/components/ButtonSample'
import AlertSample from '@/components/AlertSample'
import AvatarSample from '@/components/AvatarSample'
import ProgressCircularSample from '@/components/ProgressCircularSample'
export default {
  components: {
    AutoCompleteSample,
    CheckBoxSample,
    DatePickerSample,
    FormsSample,
    RadioButtonSample,
    SelectSample,
    SliderSample,
    SwitchSample,
    ButtonSample,
    AlertSample,
    AvatarSample,
    ProgressCircularSample
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
        SliderSample,
        SwitchSample,
        ButtonSample,
        AlertSample,
        AvatarSample,
        ProgressCircularSample
      ],
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
