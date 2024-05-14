<template>
    <nav id="navMenu">
        <h1>PAVEL KADAŇKA</h1>
        <div id="navMenuMini">
            <a :href="'/' + (item === 'home' ? '' : item)" v-for="(item, index) in menuItems" :key="index" v-if="item !== null">
                <span>{{ item }}</span>
            </a>
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
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: auto;
        padding: 2vh 3vw;
    }

    #navMenu h1 {
        display: block;
        font-size: 2vh;
        transition: 1s;
    }

    #navMenuMini {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #navMenuMini a {
        color: #00DE59;
        font-size: 2vh;
        text-decoration: none;
        margin: 0 1rem;
        position: relative;
        transition: 1s;
        height: 2rem;
        text-transform: uppercase;
    }

    @media only screen and (max-width: 950px) {
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