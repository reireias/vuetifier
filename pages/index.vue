<template>
  <v-app>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout
          column
          justify-center
          align-center
          style="margin-bottom: 20px;"
        >
          <v-flex xs12>
            <div class="primary--text display-4 font-weight-light">
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
          <v-flex xs12>
            <v-card height="100%">
              <theme class="component"></theme>
            </v-card>
          </v-flex>
          <v-flex v-for="part in parts" :key="part.name" xs12 md6>
            <v-card height="100%">
              <component :is="part" class="component"></component>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// Form Controls
import AlertSample from '@/components/AlertSample'
import AutoCompleteSample from '@/components/AutoCompleteSample'
import AvatarSample from '@/components/AvatarSample'
import ButtonSample from '@/components/ButtonSample'
import CarouselSample from '@/components/CarouselSample'
import CheckBoxSample from '@/components/CheckBoxSample'
import ChipGroupSample from '@/components/ChipGroupSample'
import ColorPickerSample from '@/components/ColorPickerSample'
import DatePickerSample from '@/components/DatePickerSample'
import FormsSample from '@/components/FormsSample'
import LazySample from '@/components/LazySample'
import OverlaySample from '@/components/OverlaySample'
import ProgressCircularSample from '@/components/ProgressCircularSample'
import RadioButtonSample from '@/components/RadioButtonSample'
import SelectSample from '@/components/SelectSample'
import SkeletonLoaderSample from '@/components/SkeletonLoaderSample'
import SlideGroupSample from '@/components/SlideGroupSample'
import SliderSample from '@/components/SliderSample'
import SwitchSample from '@/components/SwitchSample'
import Theme from '@/components/Theme'
export default {
  components: {
    AlertSample,
    AutoCompleteSample,
    AvatarSample,
    ButtonSample,
    CarouselSample,
    CheckBoxSample,
    ChipGroupSample,
    ColorPickerSample,
    DatePickerSample,
    FormsSample,
    LazySample,
    OverlaySample,
    ProgressCircularSample,
    RadioButtonSample,
    SelectSample,
    SkeletonLoaderSample,
    SlideGroupSample,
    SliderSample,
    SwitchSample,
    Theme,
  },
  data() {
    return {
      parts: [
        ColorPickerSample,
        SlideGroupSample,
        OverlaySample,
        ChipGroupSample,
        LazySample,
        SkeletonLoaderSample,
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
        ProgressCircularSample,
        CarouselSample,
      ],
      version: process.env.vuetifyVersion,
    }
  },
}
</script>

<style>
.component {
  padding: 20px;
}
</style>
