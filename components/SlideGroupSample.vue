<template>
  <v-layout wrap align-center justify-center>
    <v-flex text-center xs12>
      <div class="title-text">
        <v-icon large color="accent">fiber_new</v-icon>
        Slide Group
      </div>
      <link-buttons
        document="https://vuetifyjs.com/en/components/slide-groups"
        source="https://github.com/reireias/vuetifier/blob/master/components/SlideGroupSample.vue"
      ></link-buttons>
    </v-flex>
    <v-flex text-center xs12>
      <v-slide-group multiple show-arrows>
        <v-slide-item
          v-for="n in 25"
          :key="n"
          v-slot:default="{ active, toggle }"
        >
          <v-btn
            class="mx-2"
            :input-value="active"
            active-class="secondary white--text"
            depressed
            rounded
            @click="toggle"
          >
            Options {{ n }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-flex>
    <v-flex text-center xs12>
      <v-sheet class="mx-auto" elevation="8" max-width="800">
        <v-slide-group
          v-model="model"
          class="pa-4"
          prev-icon="mdi-minus"
          next-icon="mdi-plus"
          show-arrows
        >
          <v-slide-item
            v-for="n in 15"
            :key="n"
            v-slot:default="{ active, toggle }"
          >
            <v-card
              :color="active ? 'primary' : 'grey lighten-1'"
              class="ma-4"
              height="200"
              width="100"
              @click="toggle"
            >
              <v-layout align-center fill-height justify-center>
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  ></v-icon>
                </v-scale-transition>
              </v-layout>
            </v-card>
          </v-slide-item>
        </v-slide-group>
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
  data() {
    return {
      model: null,
    }
  },
}
</script>
