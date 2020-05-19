<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">
        Carousel
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/carousels"
        source="https://github.com/reireias/vuetifier/blob/master/components/CarouselSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs12>
      <v-carousel>
        <v-carousel-item v-for="color in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-layout align-center fill-height justify-center>
              <div class="display-3">{{ color }}</div>
            </v-layout>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
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
      colors: ['primary', 'secondary', 'accent'],
    }
  },
}
</script>
