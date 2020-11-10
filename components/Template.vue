<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">TODO</div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/hoge"
        source="https://github.com/reireias/vuetifier/blob/master/components/hoge.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs12> TODO </v-flex>
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
