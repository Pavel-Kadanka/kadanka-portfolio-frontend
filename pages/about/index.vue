<template>
    <MenuItem />

    
    <h2 class="contentBox">ABOUT</h2>
    <div class="contentBox">
        <div class="contentBoxMini">
            <p>
                
            </p>
            <img src="/postava.png" alt="">
        </div>
    </div>
    <br>
    <h2 class="contentBox">MY SKILLS</h2>
    <div class="contentBox">
        <div class="contentBoxMini">
            <v-progress-circular
                v-for="skill in skills"
                :key="skill.id"
                class="progress"
                :color="skill.color"
                size="128"
                width="8"
                :model-value="skill.percentage"
            ><span>{{ skill.name }}</span></v-progress-circular>
        </div>
    </div>



</template>
<script setup>
import { ref, onMounted } from 'vue';
import useSkillService from '~/services/skillService';

const skills = ref([]);
const { getSkills } = useSkillService(); 

onMounted(async () => {
  try {
    skills.value = await getSkills();
  } catch (error) {
    console.error(error.message);
  }
});

</script>
<style>

</style>
