<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">
        Select
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/selects"
        source="https://github.com/reireias/vuetifier/blob/master/components/SelectSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs6>
      <v-select
        label="Standard"
        :items="items"
        :dark="$vuetify.theme.dark"
      ></v-select>
    </v-flex>
    <v-flex text-center xs6>
      <v-select
        label="Filled"
        :items="items"
        :dark="$vuetify.theme.dark"
        filled
      ></v-select>
    </v-flex>
    <v-flex text-center xs6>
      <v-select
        label="Outlined"
        :items="items"
        :dark="$vuetify.theme.dark"
        outlined
      ></v-select>
    </v-flex>
    <v-flex text-center xs6>
      <v-select
        label="Solo"
        :items="items"
        :dark="$vuetify.theme.dark"
        solo
      ></v-select>
    </v-flex>
    <v-flex text-center xs6>
      <v-select
        label="Multiple"
        :items="items"
        :dark="$vuetify.theme.dark"
        multiple
      ></v-select>
    </v-flex>
    <v-flex text-center xs6>
      <v-select
        label="Multiple + Chips"
        :items="items"
        :dark="$vuetify.theme.dark"
        multiple
        chips
      ></v-select>
    </v-flex>
  </v-layout>
</template>

<script>
import LinkButtons from '@/components/LinkButtons'
export default {
  components: {
    LinkButtons
  },
  data() {
    return {
      items: ['Alice', 'Bob', 'Carol']
    }
  }
}
</script>
