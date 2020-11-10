<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">
        <v-icon large color="accent">fiber_new</v-icon>
        Lazy loading
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/lazy"
        source="https://github.com/reireias/vuetifier/blob/master/components/LazySample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs12>
      <v-lazy
        v-model="isActive"
        :options="{
          threshold: 0.5,
        }"
        min-height="200"
        transition="fade-transition"
      >
        <v-card class="mx-auto" max-width="336">
          <v-card-title>Lazy load</v-card-title>

          <v-card-text> Lazzy load component. </v-card-text>
        </v-card>
      </v-lazy>
    </v-flex>
  </v-layout>
</template>

<script>
import LinkButtons from '@/components/LinkButtons'
export default {
  components: {
    LinkButtons,
  },
  data() {
    return {
      isActive: false,
    }
  },
}
</script>
