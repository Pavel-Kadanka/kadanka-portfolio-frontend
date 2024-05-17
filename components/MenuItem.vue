<template>
    <div id="Menu">
        <nav id="navMenu">
            <h1>PAVEL KADAŇKA</h1>
            <!-- Navigation links (hidden by default on small screens) -->
            <div id="navMenuMini" :class="{ 'show': isMenuVisible }">
                <a :href="'/' + (item === 'home' ? '' : item)" v-for="(item, index) in menuItems" :key="index" v-if="item !== null">
                    <span>{{ item }}</span>
                </a>
            </div>
            <!-- Hamburger icon to toggle the navigation links -->
            <a href="javascript:void(0);" class="icon" @click="toggleMenu">
                <i class="fa fa-bars"></i>
            </a>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuItems: ['home', 'about', 'projects', 'contact-me'],
            isMenuVisible: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible;
        }
    }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

/* Default styles for larger screens */
#navMenu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    padding: 2vh 3vw;
}

#navMenu h1 {
    display: inline-block;
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

#navMenu a:hover {
    color: #ff0000;
    transform: scale(1.1);
}
.icon {
    display: none
}
/* Styles for smaller screens (max-width: 950px) */
@media only screen and (max-width: 950px) {
    /* Style the navigation menu */
    #navMenu {
        position: relative;
    }

    /* Hide the links inside the navigation menu (except for logo/home) */
    #navMenuMini {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    /* Style navigation menu links */
    #navMenuMini a {
        color: #00DE59;
        font-size: 3vh;
        text-decoration: none;
        margin: 1rem 0;
        position: relative;
        transition: 1s;
        text-transform: uppercase;
        display: block;
    }

    /* Style the hamburger menu */
    .icon {
        background: black;
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        padding: 14px 16px;
        cursor: pointer;
    }

    /* Add a grey background color on mouse-over */
    #navMenuMini a:hover {
        color: #ff0000;
        transform: scale(1.1);
    }

    /* Show the menu when it is toggled */
    #navMenuMini.show {
        display: flex;
        background-color: #00DE59;

    }

    #navMenu h1 {
        font-size: 3vh;
        text-align: center;
    }
}
</style>

