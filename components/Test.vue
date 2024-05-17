<template>
    <div>
      <h1>Projects</h1>
      <ul>
        <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
      </ul>
    </div>
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
  