<template>
    <MenuItem />

    
    <h2 class="contentBox">ABOUT</h2>
    <div class="contentBox">
        <div class="contentBoxMini">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor dolor, maximus blandit augue quis, efficitur suscipit nisl. Vestibulum sodales vulputate elit non malesuada. Integer rhoncus est ultricies metus sodales maximus. Proin volutpat id erat sit amet venenatis. Ut vulputate diam sit amet nulla tempus maximus. Duis viverra viverra metus, at consequat lectus faucibus a. Sed non imperdiet erat.
                Nulla tincidunt sem sit amet nunc blandit, id maximus ex tempor. Sed vitae dictum justo. Nam sed tempor sapien. Sed vitae tempus ex, vitae dictum dui. In hac habitasse platea dictumst. Sed ligula arcu, venenatis sed augue sed, ullamcorper convallis justo. In accumsan odio at sem rhoncus, sit amet dictum libero consequat. Nullam ornare lorem in blandit molestie. Aenean efficitur nibh rutrum dictum feugiat. Sed condimentum non lectus sed bibendum.
                Sed mattis, mi in blandit suscipit, ante erat commodo nunc, ac sodales magna metus sit amet neque. Nunc vel fringilla eros, ac eleifend eros. Praesent at luctus ipsum. Donec tincidunt sem quis dui ullamcorper porta. Etiam nec mi ac sem vehicula dignissim. In elit purus, vehicula nec sem sit amet, venenatis dignissim enim. Donec arcu velit, sodales nec feugiat feugiat, dictum nec erat. Quisque id metus quis augue mattis placerat. Nam ac turpis vitae turpis vulputate congue non vel nisi. Sed pharetra facilisis elementum.
            </p>
            <img src="public/cutecat.jpg" alt="">
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