<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">Button</div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/buttons"
        source="https://github.com/reireias/vuetifier/blob/master/components/ButtonSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs12>
      <v-btn color="primary" :dark="$vuetify.theme.dark">primary</v-btn>
      <v-btn color="secondary" :dark="$vuetify.theme.dark">secondary</v-btn>
      <v-btn color="accent" :dark="$vuetify.theme.dark">accent</v-btn>
    </v-flex>
    <v-flex text-center xs12>
      <v-btn color="primary" :dark="$vuetify.theme.dark" outlined
        >primary</v-btn
      >
      <v-btn color="secondary" :dark="$vuetify.theme.dark" outlined
        >secondary</v-btn
      >
      <v-btn color="accent" :dark="$vuetify.theme.dark" outlined>accent</v-btn>
    </v-flex>
    <v-flex text-center xs12>
      <v-btn color="primary" :dark="$vuetify.theme.dark" fab>
        <v-icon>email</v-icon>
      </v-btn>
      <v-btn color="secondary" :dark="$vuetify.theme.dark" fab>
        <v-icon>email</v-icon>
      </v-btn>
      <v-btn color="accent" :dark="$vuetify.theme.dark" fab>
        <v-icon>email</v-icon>
      </v-btn>
    </v-flex>
    <v-flex text-center xs12>
      <v-btn color="primary" :dark="$vuetify.theme.dark" fab outlined>
        <v-icon>email</v-icon>
      </v-btn>
      <v-btn color="secondary" :dark="$vuetify.theme.dark" fab outlined>
        <v-icon>email</v-icon>
      </v-btn>
      <v-btn color="accent" :dark="$vuetify.theme.dark" fab outlined>
        <v-icon>email</v-icon>
      </v-btn>
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
