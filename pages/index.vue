<template>
  <v-container class="full-height d-flex align-center scaled-content">
      <v-row align-self="center" justify="center" class="d-flex align-center">
          <v-col cols="12" md="6" align-self="center" align="center">
              <v-img 
                  src="/me-hands-crossed.png"
                  :max-width="300"
                  width="auto"
                  aspect-ratio="16/9"
                  class="fly-left"
              ></v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center" :class="{'text-center': isMobile, 'text-left': !isMobile, 'fly-right': true}">
              <p class="text-subtitle-1 opacity-60">Greetings, my name is</p>
              <h1 class="text-h2 font-weight-black">Pavel Kadaňka <span class="text-subtitle-1 font-italic">and</span></h1>
              <h2 class="text-h3 font-weight-bold">I love to code stuff <3</h2>
              <p class="text-subtitle-1 opacity-30 special-view">I am web developer, but I just really enjoy coding.</p>
              <a href="#skills" class="text-subtitle-1 font-weight-bold text-decoration-underline opacity-100">Scroll down</a>
              <span class="text-subtitle-1 opacity-30 text-left"> if you want to know more</span>
          </v-col>
      </v-row>
  </v-container>

  <v-container id="skills" class="full-height d-flex align-center scaled-content">
      <v-row class="d-flex align-center">
          <v-col cols="12" md="6">
              <v-img
                  class="mx-auto"
                  src="/me-just-face.png"
                  :width="300"
                  aspect-ratio="16/9"
              ></v-img>
              <p 
                  class="text-subtitle-1 text-center mt-2 pd-10"
              >
                  My name is Pavel, young and eager<br>
                  <span class="special-color text-subtitle-1 font-weight-black">web developer</span>, who loves to learn new stuff.<br>Here you can see my skills.
              </p>
              <v-spacer></v-spacer>
          </v-col>
          <v-col cols="12" md="6" align="center" align-self="center" class="fly-right">
              <v-progress-circular
                  v-for="skill in skills"
                  :key="skill.id"
                  class="ma-2"
                  color="#FF81C1"
                  bg-color="white"
                  size="128"
                  :model-value="skill.percentage"
              >
                  <span class="text-subtitle-1 font-weight-bold">{{ skill.name }}</span>
              </v-progress-circular>
          </v-col>
      </v-row>
  </v-container>

  <v-container id="contact-1" class="full-height scaled-content">
      <v-row>
          <v-col md="6" :class="{'text-center': isMobile, 'text-left': !isMobile, 'fly-left': true, 'mx-16': true, 'mt-16': !isMobile}">
              <h1 class="font-weight-bold text-center" :class="{'text-h2': !isMobile, 'text-h3 special-color02 special-font': isMobile}">I want <span class="special-color">YOU</span><br>to work with me.</h1>
              <p class="text-subtitle-1 text-center mt-2 pd-10">If you are interested, you can see more<br>of my work if you scroll down. </p>
          </v-col>
          <v-col cols="12" md="6">
              <!-- Empty column for spacing -->
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" md="6" class="img-container" :class="{ 'img-center': isMobile }">
              <v-img
                  class="mb-4 fly-left"
                  src="/me-pointing.png"
                  max-width="300"
                  :width="300"
                  aspect-ratio="16/9"
                  align="center"
              ></v-img>
          </v-col>
          <v-col cols="12" md="6" class="fly-right" align-self="end">
              <h2 class="text-h4 font-weight-bold special-color02 text-center">If you are <span class="special-color">already interested</span><br>you can contact me here <span class="text-subtitle-1 font-italic">btw:)</span><br></h2>
              <br>
              <Contact align="end"/>
          </v-col>
      </v-row>
  </v-container>
  
  <v-container id="other-work" class="full-height my-16 scaled-content" align-self="center" justify="center">
      <v-row class="mt-16">
          <v-col class="py-8">
              <h1 class="text-h2 text-center font-weight-bold">My other work</h1>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="12" md="9" align="center" justify="center">
              <v-row>
                  <v-col v-for="project in projects" :key="project.id" :cols="isMobile ? 6 : 12" md="4" align="center" class="fly-left">
                      <v-card variant="outlined" color="#FF81C1" max-height="200" max-width="200">
                          <v-card-title class="text-h4 font-weight-bold special-color02 text-left">{{ project.title }}</v-card-title>
                          <v-card-text class="truncate-text text-subtitle-1 text-left">{{ project.name }}</v-card-text>
                          <v-card-actions>
                              <v-btn variant="outlined" @click="openDialog(project)">more-info</v-btn>
                          </v-card-actions>
                      </v-card>
                      <v-dialog v-model="project.dialog.value" max-width="700px" persistent>
                          <v-card variant="elevated" color="#212E4A" align="center" height="400">
                              <v-card-title class="text-h4 font-weight-bold special-color02">{{ project.title }}</v-card-title>
                              <v-card-item class="d-flex justify-center">
                                <v-img :src="project.image" max-width="300" :width="200" aspect-ratio="16/9"></v-img>
                              </v-card-item>
                              <v-card-text class="text-subtitle-1 opacity-60">
                                  {{ project.name }}
                              </v-card-text>
                              <v-card-actions>
                                  <v-btn variant="outlined" color="#FF81C1" text @click="closeDialog(project)">Close</v-btn>
                              </v-card-actions>
                          </v-card>
                      </v-dialog>
                  </v-col>
              </v-row>
          </v-col>
          <v-col cols="12" md="3" class="d-flex justify-end align-start" :class="{'justify-center': isMobile}">
              <v-img src="/me-hands-crossed.png" max-width="300" :width="200" aspect-ratio="16/9" align-self="start"></v-img>
          </v-col>
      </v-row>
  </v-container>

  <div class="text-h4 special-color02 text-center">Contact me <span class="text-subtitle-1 font-italic">:)</span></div>

  <v-container class="my-16 scaled-content" align="center">
    <Contact />
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import useSkillService from '~/services/skillService';
import useProjectService from '~/services/projectService';
import { useDisplay } from 'vuetify';

export default {
setup() {
  const skills = ref([]);
  const projects = ref([]);
  const { getSkills } = useSkillService();
  const { getProjects } = useProjectService();
  const { sm } = useDisplay();
  const { xs } = useDisplay();
  const isMobile = computed(() => sm.value || xs.value);

  onMounted(async () => {
    try {
      skills.value = await getSkills();
    } catch (error) {
      console.error(error.message);
    }
    try {
      const fetchedProjects = await getProjects();
      projects.value = fetchedProjects.map(project => ({
        ...project,
        dialog: { value: false } // Initialize dialog as an object with a value property
      }));
    } catch (error) {
      console.error(error.message);
    }
  });

  const fallbackSkills = [
    {"id":1,"percentage":100,"name":"HTML","color":"#f16529"},
    {"id":2,"percentage":90,"name":"CSS","color":"#2965f1"},
    {"id":3,"percentage":70,"name":"JavaScript","color":"#f0dc4e"},
    {"id":4,"percentage":50,"name":"VUE 3","color":"green"},
    {"id":5,"percentage":50,"name":"NUXT 3","color":"green"},
    {"id":6,"percentage":20,"name":"C#","color":"#00589d"},
    {"id":7,"percentage":100,"name":"git","color":"#f05133"},
    {"id":8,"percentage":40,"name":"PHP","color":"#787cb4"},
    {"id":9,"percentage":20,"name":"Laravel","color":"#ff291a"}
  ];

  const fallbackProject = [
      {
      "id": 1,
      "title": "takovi",
      "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "/me-hands-crossed.png",
              "dialog": ref(false)
    },
    {
      "id": 2,
      "title": "takovi",
      "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "/me-hands-crossed.png",
      "dialog": ref(false)
    },
    {
      "id": 3,
      "title": "takovi",
      "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "/me-hands-crossed.png",
      "dialog": ref(false)
    },
    {
      "id": 4,
      "title": "takovi",
      "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "/me-hands-crossed.png",
      "dialog": ref(false)
    },
    {
      "id": 5,
      "title": "takovi",
      "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "/me-hands-crossed.png",
      "dialog": ref(false)
    },
    {
      "id": 6,
      "title": "takovi",
      "name": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "/me-hands-crossed.png",
      "dialog": ref(false)
    }
    // Add more projects as needed
  ];

  const openDialog = (project) => {
    project.dialog.value = true; // Ensure project is defined and has a dialog property
    console.log("open");
  };

  const closeDialog = (project) => {
    project.dialog.value = false; // Ensure project is defined and has a dialog property
  };

  return {
    isMobile,
    skills,
    projects,
    fallbackSkills,
    fallbackProject,
    openDialog,
    closeDialog
  };
}
};

</script>

<style scoped>
.text-h2 {
font-family: 'Joti One', sans-serif;
}
.text-h3 {
font-family: 'Irish Grover', sans-serif;
}
.text-h4 {
font-family: 'Joti One', sans-serif;
}
.text-subtitle-1 {
font-family: 'Kode Mono', sans-serif;
}
.fly-left {
animation: flyIn-left 1s forwards;
}
.fly-right {
animation: flyIn-right 1s forwards;
}
.special-font {
  font-family: 'Joti One', sans-serif;
}
.img-container {
  display: flex;
  justify-content: flex-start; /* Default alignment for larger screens */
}

.img-center {
  justify-content: center; /* Alignment for mobile screens */
}
</style>
