<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">Skeleton loader</div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/skeleton-loaders"
        source="https://github.com/reireias/vuetifier/blob/master/components/SkeletonLoader.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs12>
      <v-sheet
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="px-3 pt-3 pb-3"
      >
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-sheet>
    </v-flex>
  </v-layout>
</template>

<script>
import LinkButtons from '@/components/LinkButtons'
export default {
  components: {
    LinkButtons,
  },
  inject: ['theme'],
}
</script>
