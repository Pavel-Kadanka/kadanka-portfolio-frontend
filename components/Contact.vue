<template>
  <v-row align="center" justify="center">
      <v-col align="center">
          <v-btn href="https://github.com/Pavel-Kadanka" height="60" width="60" variant="outlined" color="#FF81C1" class="hover">
              <v-icon left>
                  <img src="/github.svg" alt="Github" height="25">
              </v-icon>
          </v-btn>
      </v-col>

      <v-col align="center">
          <v-btn @click="openPopup" height="60" width="60" variant="outlined" color="#FF81C1" class="hover">
              <v-icon left>
                  <img src="/mail.png" alt="message" height="25">
              </v-icon>
          </v-btn>
          
          <v-dialog v-model="dialog" max-width="500px" persistent>
              <v-card variant="elevated" color="#212E4A" align="center">
                  <v-card-title class="text-h5 font-weight-bold">This is my working email :)</v-card-title>
                  <v-card-text class="text-subtitle-1 opacity-60">
                      pavel.kadanka@outlook.cz
                  </v-card-text>
                  <v-card-actions>
                      <v-btn variant="outlined" color="#FF81C1" text @click="closePopup">Close</v-btn>
                  </v-card-actions>
              </v-card>
          </v-dialog>
      </v-col>

      <v-col align="center">
          <v-btn href="https://www.linkedin.com/in/pavel-kada%C5%88ka-48a34b296/" height="60" width="60" variant="outlined" color="#FF81C1" class="hover">
              <v-icon left>
                  <img src="/linkedin.svg" alt="LinkedIn" height="25">
              </v-icon>
          </v-btn>
      </v-col>

      <v-col align="center">
          <v-btn href="https://www.upwork.com/freelancers/~01b2864f3f25d242c8?mp_source=share" height="60" width="60" variant="outlined" color="#FF81C1" class="hover">
              <v-icon left>
                  <img src="/upwork.svg" alt="UpWork" height="25">
              </v-icon>
          </v-btn>
      </v-col>
  </v-row>

</template>
<script>
export default {
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    openPopup() {
      this.dialog = true;
    },
    closePopup() {
      this.dialog = false;
    }
  }
}
</script>
<style scoped>
  .text-h5 {
    font-family: 'Joti One', sans-serif;
  }
  .hover {
    transition: 1s; /* Ensure the transition property applies to the transform */
  }

  .hover:hover {
      transform: scale(1.1); /* Use transform: scale to apply the scaling */
  }
</style>