<template>
  <MenuItem />

  <h2 class="contentBox">MY PROJECTS</h2>
  <v-row class="contentBox">
    <div class="contentBoxMini">
      <v-col v-for="item in items" :key="item.id" cols="10" md="3">
        <v-card
          color="#00DE59"
          border=""
          :image="item.image"
        >
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.text }}</v-card-text>
        </v-card>
      </v-col>
    </div>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Project name 1",
          text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
          image: "cutecat.jpg"
        },
        {
          id: 2,
          title: "Project name 1",
          text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
          image: "cutecat.jpg"
        },
        {
          id: 3,
          title: "Project name 1",
          text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
          image: "cutecat.jpg"
        },
        {
          id: 4,
          title: "Project name 1",
          text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
          image: "cutecat.jpg"
        },
        {
          id: 5,
          title: "Project name 1",
          text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
          image: "cutecat.jpg"
        },
      ]
    };
  }
};
</script>

<style>

</style>
