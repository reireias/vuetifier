<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">
        Button
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/buttons"
        source="https://github.com/reireias/vuetifier/blob/master/components/ButtonSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs12>
      <v-btn color="primary" :dark="dark">primary</v-btn>
      <v-btn color="secondary" :dark="dark">secondary</v-btn>
      <v-btn color="accent" :dark="dark">accent</v-btn>
    </v-flex>
    <v-flex text-center xs12>
      <v-btn color="primary" :dark="dark" outlined>primary</v-btn>
      <v-btn color="secondary" :dark="dark" outlined>secondary</v-btn>
      <v-btn color="accent" :dark="dark" outlined>accent</v-btn>
    </v-flex>
    <v-flex text-center xs12>
      <v-btn color="primary" :dark="dark" fab>
        <v-icon>email</v-icon>
      </v-btn>
      <v-btn color="secondary" :dark="dark" fab>
        <v-icon>email</v-icon>
      </v-btn>
      <v-btn color="accent" :dark="dark" fab>
        <v-icon>email</v-icon>
      </v-btn>
    </v-flex>
    <v-flex text-center xs12>
      <v-btn color="primary" :dark="dark" fab outlined>
        <v-icon>email</v-icon>
      </v-btn>
      <v-btn color="secondary" :dark="dark" fab outlined>
        <v-icon>email</v-icon>
      </v-btn>
      <v-btn color="accent" :dark="dark" fab outlined>
        <v-icon>email</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import LinkButtons from '@/components/LinkButtons'
export default {
  components: {
    LinkButtons
  },
  computed: {
    ...mapGetters(['dark'])
  }
}
</script>
