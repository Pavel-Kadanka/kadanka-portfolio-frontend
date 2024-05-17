<template>
  <MenuItem />

  <h2 class="contentBox">MY PROJECTS</h2>
  <v-row class="contentBox">
    <div class="contentBoxMini">
      <v-col v-for="project in projects" :key="project.id" cols="10" md="40">
        <v-card
          color="#00DE59"
          border=""
          :image="project.image"
        >
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-text>{{ project.name }}</v-card-text>
        </v-card>
      </v-col>
    </div>
  </v-row>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import useProjectService from '~/services/projectService';
  
  const projects = ref([]);
  const { getProjects } = useProjectService();
  
  onMounted(async () => {
    try {
      projects.value = await getProjects();
    } catch (error) {
      console.error(error.message);
    }
  });
</script>

<style>

</style>
