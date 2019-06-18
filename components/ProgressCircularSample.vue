<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-xs-center xs12>
      <div class="title-text display-2 font-weight-light">
        Progress Circular
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/progress"
        source="https://github.com/reireias/vuetifier/blob/master/components/ProgressCircularSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-xs-center xs12>
      <v-progress-circular
        :rotate="360"
        :size="100"
        :width="15"
        :value="value"
        color="teal"
      >
        {{ value }}
      </v-progress-circular>
      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="15"
        :value="value"
        color="primary"
      >
        {{ value }}
      </v-progress-circular>
      <v-progress-circular
        :rotate="90"
        :size="100"
        :width="15"
        :value="value"
        color="red"
      >
        {{ value }}
      </v-progress-circular>
      <v-progress-circular
        :rotate="180"
        :size="100"
        :width="15"
        :value="value"
        color="pink"
      >
        {{ value }}
      </v-progress-circular>
    </v-flex>
  </v-layout>
</template>

<script>
import LinkButtons from '@/components/LinkButtons'
import { mapGetters } from 'vuex'
export default {
  components: {
    LinkButtons
  },
  data() {
    return {
      interval: {},
      value: 0
    }
  },
  computed: {
    ...mapGetters(['dark'])
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
  }
}
</script>
