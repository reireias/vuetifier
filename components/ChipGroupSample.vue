<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">
        <v-icon large color="accent">fiber_new</v-icon>
        Chip Group
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/chip-groups"
        source="https://github.com/reireias/vuetifier/blob/master/components/ChipGroupSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs12>
      <v-chip-group
        column
        multiple
        active-class="primary--text"
        class="chip-group"
      >
        <v-chip v-for="chip in chips" :key="chip">{{ chip }}</v-chip>
      </v-chip-group>
    </v-flex>
    <v-flex text-center xs12>
      <v-chip-group
        column
        multiple
        active-class="primary--text"
        class="chip-group"
      >
        <v-chip v-for="chip in chips" :key="chip" filter outlined>{{
          chip
        }}</v-chip>
      </v-chip-group>
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
      chips: ['Javascript', 'Go', 'Python', 'Ruby', 'Swift', 'Kotlin'],
    }
  },
}
</script>

<style>
.chip-group {
  margin-left: 40px;
}
</style>
