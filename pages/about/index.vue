<template>
    <MenuItem />

    
    <h2 class="contentBox">ABOUT</h2>
    <div class="contentBox">
        <div class="contentBoxMini">
            <pre>
                I'm a motivated and detail-oriented frontend developer, my expertise are in Vue.js, Nuxt.js, Node.js, HTML, CSS, and JavaScript. With some basics in PHP, I am eager to contribute to dynamic web development projects. My goal is to create seamless, responsive, and user-friendly web applications that meet and exceed client expectations.

                Frontend Development
                - Proficient in Vue.js and Nuxt.js for building interactive and high-performance web applications.
                - Strong command of HTML5, CSS3, and modern JavaScript (ES6+).

                Backend Development
                - Foundational knowledge of PHP, enabling seamless integration between frontend and backend.
                - Basic understanding of RESTful APIs and their integration with frontend technologies.

                Version Control and Collaboration
                - Proficient in using Git for version control, ensuring smooth code management.
                - Experience with GitHub

                Tools and Workflows
                - Familiar with modern development tools and workflows, including npm/yarn.
                - Adept at using debugging and testing tools to ensure code quality and performance.

                Soft Skills
                - Good in problem-solving and attention to detail.
                - Ability to adapt quickly to new technologies and frameworks.

                Professional Goals
                - Contribute to innovative web development projects that challenge and expand my technical skills.
                - Continuously improve my expertise in frontend and backend development, exploring new technologies and best practices.
            </pre>
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
