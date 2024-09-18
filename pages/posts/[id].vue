<template>
  <v-container class="pa-8">
    <v-row>
      <v-col>
        <h1 class="text-h2 font-weight-bold special-color02 text-left">
          {{ fallbackProjects[post].title }}
        </h1>
      </v-col>
      <v-col align="end">
        <v-btn
          @click="goBack()"
          icon="mdi-arrow-right"
          variant="outlined"
          color="#F8DB27">
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <!-- First column with images and progress circular -->
      <v-col cols="12">
        <!-- Dialog for the image -->
        <v-dialog v-model="x" @click="closeDialog" class="blurred-background">
          <v-img :src="selectedImage?.title" max-height="500px" class="image"></v-img>
        </v-dialog>
    
        <!-- Carousel to display images -->
        <v-carousel height="250px" class="mt-8">
          <v-carousel-item
            v-for="image in projects[post].imageList"
            :key="image.imageId"
            :src="image.title"
            cover
            @click="openDialog(image)"
          ></v-carousel-item>
        </v-carousel>
    
        <h2 class="text-h5 font-weight-bold special-color02 pt-4">
          Skill level when I did this project
        </h2>
    
        <v-progress-circular
          v-for="skill in projects[post].usedSkills"
          :key="skill.id"
          class="ma-2"
          color="#FF81C1"
          bg-color="white"
          size="64"
          :model-value="skill.percentage"
        >
          <span class="text-subtitle-1 font-weight-bold">{{ skill.name }}</span>
        </v-progress-circular>
      </v-col>
    
      <!-- Second column with project name -->
      <v-col cols="12" class="custom-width">
        <p class="text-subtitle-1 pa-6">{{ projects[post].name }}</p>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useDisplay } from "vuetify";
import useProjectService from '~/services/projectService';

export default {
  setup() {
    const { getProjects } = useProjectService();
    const route = useRoute();
    const post = route.params.id - 1; // Get the project ID from the route

    const x = ref(false); // Ref for controlling dialog visibility
    const selectedImage = ref(null); // Ref to store the selected image

    onMounted(async () => {
      try {
        const fetchedProjects = await getProjects();
        projects.value = fetchedProjects.map(project => ({
          ...project,
          dialog: { value: false }
        }));
      } catch (error) {
        console.error(error.message);
      }
    });

    // Fallback project data
    const fallbackProjects = [
        {
        "id": 1,
        "title": "takovi",
        "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "imageList": [
            { title: "/mail.png", imageId: 1 },
            { title: "/mail.png", imageId: 2 }
        ],
        "dialog": ref(false),
        "usedSkills": [
            { name: "Vue", percentage: 75, id: 1 },
            { name: "Nuxt", percentage: 80, id: 2 }
        ]
        },
        {
        "id": 2,
        "title": "takovi",
        "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "imageList": [
            { title: "/mail.png", imageId: 1 },
            { title: "/mail.png", imageId: 2 }
        ],
        "dialog": ref(false),
        "usedSkills": [
            { name: "Vue", percentage: 75, id: 1 },
            { name: "Nuxt", percentage: 80, id: 2 }
        ]
        },
        {
        "id": 3,
        "title": "marek",
        "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "imageList": [
            { title: "/mail.png", imageId: 1 },
            { title: "/takovi.png", imageId: 2 }
        ],
        "dialog": ref(false),
        "usedSkills": [
            { name: "Vue", percentage: 75, id: 1 },
            { name: "Nuxt", percentage: 80, id: 2 }
        ]
        },
        {
        "id": 4,
        "title": "takovi",
        "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "imageList": [
            { title: "/mail.png", imageId: 1 },
            { title: "/mail.png", imageId: 2 }
        ],
        "dialog": ref(false),
        "usedSkills": [
            { name: "Vue", percentage: 75, id: 1 },
            { name: "Nuxt", percentage: 80, id: 2 }
        ]
        },
        {
        "id": 5,
        "title": "takovi",
        "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "imageList": [
            { title: "/mail.png", id: 1 },
            { title: "/mail.png", id: 2 }
        ],
        "dialog": ref(false),
        "usedSkills": [
            { name: "Vue", percentage: 75, id: 1 },
            { name: "Nuxt", percentage: 80, id: 2 }
        ]
        },
        {
        "id": 6,
        "title": "takovi",
        "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "imageList": [
            { title: "/mail.png", id: 1 },
            { title: "/mail.png", id: 2 }
        ],
        "dialog": ref(false),
        "usedSkills": [
            { name: "Vue", percentage: 75, id: 1 },
            { name: "Nuxt", percentage: 80, id: 2 }
        ]
        }
      ];

    // Function to open the dialog with the selected image
    const openDialog = (image) => {
      selectedImage.value = image; // Set the clicked image as the selected image
      x.value = true; // Open the dialog
    };

    // Function to close the dialog
    const closeDialog = () => {
      x.value = false; // Close the dialog
    };

    // Vuetify display composable (for mobile detection)
    const { sm, xs } = useDisplay();
    const isMobile = computed(() => sm.value || xs.value);

    function goBack() {
      window.history.back();
    }

    return {
      post,
      fallbackProjects,
      x,
      selectedImage,
      openDialog,
      closeDialog,
      isMobile,
      goBack
    };
  },
};
</script>

<style scoped>

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
