<template>
  <v-container class="pa-8" v-if="projects.length">
    <v-row>
      <v-col>
        <h1 class="text-h2 font-weight-bold special-color02 text-left">
          {{ post !== null ? projects[post].title : 'Loading...' }}
        </h1>
      </v-col>
      <v-col align="end">
        <v-btn @click="goBack()" icon="mdi-arrow-right" variant="outlined" color="#F8DB27">
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <!-- First column with images and progress circular -->
      <v-col cols="12">
        <!-- Dialog for the image -->
        <v-dialog v-model="x" @click="closeDialog" class="blurred-background">
          <v-img :src="selectedImage?.src" max-height="500px" class="image"></v-img>
        </v-dialog>

        <!-- Carousel to display images -->
        <v-carousel v-if="images.length" height="250px" class="mt-8">
          <v-carousel-item 
            v-for="image in images" 
            :key="image.id" 
            :src="image.src" 
            cover
            @click="openDialog(image)">
          </v-carousel-item>
        </v-carousel>

        <h2 class="text-h5 font-weight-bold special-color pt-4">
          Skill level when I did this project
        </h2>

        <v-progress-circular 
          v-for="skill in project_skills"
          :key="skill.id" 
          class="ma-2" 
          color="#FF81C1"
          bg-color="white" 
          size="64" 
          :model-value="skill.percentage">
          <span class="text-subtitle-1 font-weight-bold">{{ skill.name }}</span>
        </v-progress-circular>

      
      </v-col>

      <!-- Second column with project name -->
      <v-col  class="custom-width">
        <p class="text-subtitle-1 pa-6">{{ projects[post].name }}</p>
      </v-col>
    </v-row>
  </v-container>

  <v-container v-else>
    <p class="text-subtitle-1">Loading project...</p>
  </v-container>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useDisplay } from "vuetify";

export default {
  setup() {
    const { sm, xs, lg, xl } = useDisplay();
    const route = useRoute();
    const projects = ref([]);
    const images = ref([]);
    const project_skills = ref([]);
    const x = ref(false); // Ref for controlling dialog visibility
    const selectedImage = ref(null); // Ref to store the selected image

    onMounted(async () => {
      try {
        projects.value = await $fetch('/api/projects');
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
      if (post.value !== null) {
        try {
          // Fetch the images for the selected project
          images.value = await $fetch(`/api/images?project_id=${post.value + 1}`);
        } catch (error) {
          console.error('Error fetching images:', error);
        }

        try {
          // Fetch the project skills for the selected project
          project_skills.value = await $fetch(`/api/project_skills?project_id=${post.value + 1}`);
        } catch (error) {
          console.error('Error fetching project_skills:', error);
        }
      }
    });

    // Compute post index based on route param
    const post = computed(() => {
      const id = parseInt(route.params.id) - 1; // Ensure the ID is parsed correctly
      return (projects.value.length > id && id >= 0) ? id : null; // Return null if out of bounds
    });

    // Function to open the dialog with the selected image
    const openDialog = (image) => {
      selectedImage.value = image; // Set the clicked image as the selected image
      x.value = true; // Open the dialog
    };

    // Function to close the dialog
    const closeDialog = () => {
      x.value = false; // Close the dialog
    };

    // Function to go back
    const goBack = () => {
      window.history.back();
    };

    return {
      post,
      x,
      selectedImage,
      projects,
      images,
      project_skills,
      openDialog,
      closeDialog,
      goBack,
      sm,
      xs,
      lg,
      xl
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
.text-h2 {
  font-family: 'Joti One', sans-serif;
}

.text-h3 {
  font-family: 'Irish Grover', sans-serif;
}

.text-h5 {
  font-family: 'Joti One', sans-serif;
}

.text-subtitle-1 {
  font-family: 'Kode Mono', sans-serif;
}
.blurred-background {
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  padding: 10px;
}

.image {
  position: block;
  z-index: 1;
  filter: none;
}

.custom-width {
  width: 100%;
}
</style>
