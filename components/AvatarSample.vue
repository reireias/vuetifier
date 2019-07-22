<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-xs-center xs12>
      <div class="title-text display-2 font-weight-light">
        Avatar
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/avatars"
        source="https://github.com/reireias/vuetifier/blob/master/components/AvatarSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-xs-center xs12>
      <v-avatar>
        <img src="Octocat.png" alt="image" />
      </v-avatar>
      <v-avatar color="primary">
        <v-icon :dark="dark">account_circle</v-icon>
      </v-avatar>
      <v-avatar color="secondary">
        <span class="white--text headline">C</span>
      </v-avatar>
      <v-avatar color="accent">
        <span class="white--text headline">J</span>
      </v-avatar>
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
