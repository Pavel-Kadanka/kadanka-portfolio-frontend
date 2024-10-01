<template>
  <v-container :class="{'full-height': isSuperLarge || isLarge}" class="d-flex align-center scaled-content">
    <v-row align-self="center" justify="center" class="d-flex align-center">
        <v-col cols="12" md="6" align-self="center" align="center">
            <v-img 
                src="/me-hands-crossed.png"
                :max-width="400"
                width="auto"
                aspect-ratio="16/9"
                class="align-left"
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

<v-container id="skills" :class="{'full-height': isSuperLarge || isLarge}" class="align-center scaled-content">
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
        <v-col cols="12" md="6" align="" align-self="center" :class="{'fly-right': !isMobile, 'text-center': isMobile}">
            <v-progress-circular
                v-for="skill in skills"
                :key="skill.id"
                class="ma-1"
                color="#FF81C1"
                bg-color="white"
                size="128"
                :model-value="skill.percentage"
            >
                <span class="text-subtitle-1 font-weight-bold">{{ skill.name }}</span>
            </v-progress-circular>
        </v-col>
    </v-row>
    <v-row justify="center" align="center">
        <v-col class="d-flex justify-center mt-8">
            <v-btn
                icon="mdi-arrow-down"
                href="#contact1"
                variant="outlined"
                color="#F8DB27"
            >
            </v-btn>
        </v-col>
    </v-row>
</v-container>

<v-container id="contact1" :class="{'full-height': isSuperLarge || isLarge}" class="scaled-content">
    <v-row>
        <v-col md="9" :class="{'text-center': isMobile, 'text-center': !isMobile, 'fly-left': true, 'mx-16': true}">
            <h1 class="font-weight-bold text-center" :class="{'text-h2': !isMobile, 'text-h3 special-color02 special-font': isMobile}">I want <span class="special-color">YOU</span><br>to work with me.</h1>
            <p class="text-subtitle-1 text-center mt-2 pd-10">If you are interested, you can see more<br>of my work if you scroll down. </p>
        </v-col>
    </v-row>
    <v-row>
        <v-col md="6" class="img-container img-center " :class="{'pl-16': !isMobile}">
            <v-img
                class="mb-4 fly-left"
                src="/me-pointing.png"
                max-width="300"
                :width="300"
                aspect-ratio="16/9"
                align="center"
            ></v-img>
        </v-col>
        <v-col md="6" class="fly-right mb-16" align-self="end">
            <h2 class="text-h4 font-weight-bold special-color02 text-center">If you are <span class="special-color">already interested</span><br>you can contact me here <span class="text-subtitle-1 font-italic">btw:)</span><br></h2>
            <br>
            <Contact align="end"/>
        </v-col>
    </v-row>
    <v-row justify="center" align="center">
        <v-col class="d-flex justify-center">
            <v-btn
                icon="mdi-arrow-down"
                href="#other-work"
                variant="outlined"
                color="#F8DB27"
            >
            </v-btn>
        </v-col>
    </v-row>
</v-container>

<v-container id="other-work" :class="{'full-height': isSuperLarge || isLarge, 'mb-16 scaled-content panel': !isMobile, 'mb-0 scaled-content panel': isMobile}" align-self="center" justify="center">
    <v-row :class="{'mt-16': !isMobile, 'mt-0': isMobile}">
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
                      <v-card-actions class="ml-2">
                        <v-btn variant="outlined" :to="'/posts/' + project.id">more info</v-btn>
                      </v-card-actions>
                    </v-card>
                </v-col>                  
            </v-row>
        </v-col>
        <v-col cols="12" md="3" class="d-flex justify-end align-start" :class="{'justify-center': isMobile}">
            <v-img src="/me-hands-crossed.png" max-width="300" :width="200" aspect-ratio="16/9" align-self="start"></v-img>
        </v-col>
    </v-row>
</v-container>

<div class="text-h4 special-color02 text-center">Contact me <span class="text-subtitle-1 font-italic">:)</span></div>

<v-container class="scaled-content" align="center">
  <Contact />
</v-container>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useDisplay } from 'vuetify'; // Assuming you're using Vuetify for responsive display

export default {
  setup() {
    const { sm, xs, lg, xl } = useDisplay();
    const projects = ref([]);
    const skills = ref([]);

    onMounted(async () => {
      // Fetch projects
      try {
        projects.value = await $fetch('/api/projects');
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
      // Fetch skills
      try {
        skills.value = await $fetch('/api/skills');
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    });

    const isMobile = computed(() => sm.value || xs.value);
    const isSuperLarge = computed(() => xl.value);
    const isLarge = computed(() => lg.value);

    return {
      isMobile,
      isLarge,
      isSuperLarge,
      projects,
      skills
    };
  },
  methods: {

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
  justify-content: start; /* Alignment for mobile screens */
}
</style>
