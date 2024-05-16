<template>
    <MenuItem />

    <div class="contentBox02">
        <v-card
            color="#00DE59"
        >
            <v-card-text><a href="https://github.com/Pavel-Kadanka"><img src="public/github.png" alt=""></a></v-card-text>
        </v-card>

        <v-card
            @click="openPopup"
            color="#00DE59"
        >
            <v-card-text><img src="public/message.png" alt=""></v-card-text>
        </v-card>
        <v-dialog v-model="dialog" max-width="400">
            <v-card>
            <v-card-title class="headline">This is my working email</v-card-title>
            <v-card-text>
                pavel.kadanka@outlook.cz
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="closePopup">Close</v-btn>
            </v-card-actions>
            </v-card>
        </v-dialog>

        <v-card
            color="#00DE59"
        >
            <v-card-text><a href="https://www.linkedin.com/in/pavel-kada%C5%88ka-48a34b296/"><img src="public/linkedin.png" alt=""></a></v-card-text>
        </v-card>
    </div>  
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