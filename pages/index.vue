<template>
    <nav id="navMenu">
        <h1>PAVEL KADAŇKA</h1>
        <div id="navMenuMini">
            <nuxt-link :href="'/' + item" v-for="(item, index) in menuItems" :key="index">
                <span>{{ item }}</span>
            </nuxt-link>
            <div class="dot"></div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menuItems: ['home', 'about', 'projects', 'resume']
        };
    },
};
</script>

<style scoped>
    #mainMenu {
        display: flex;
    }

    #navMenu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    #navMenu h1 {
        display: block;
        font-size: 7vh;
        transition: 1s;
        margin: 1rem;
    }

    #navMenuMini {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;
        width: 100vh;
    }

    #navMenuMini a {
        color: #00DE59;
        font-size: 4vh;
        text-decoration: none;
        margin: 1rem;
        position: relative;
        transition: 1s;
        height: 2rem;
        text-transform: uppercase;
    }

    @media only screen and (max-width: 768px) {
        #navMenu h1 {
            position: relative;
            font-size: 5vh;
            text-align: center;
        }

        #navMenuMini {
            flex-direction: column;
            height: auto;
        }

        #navMenuMini a {
            position: relative;
            font-size: 3vh;
            height: 1rem;
        }
    }

    #navMenu a:hover {
        color: #ff0000;
    }
</style>
