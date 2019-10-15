<template>
    <div class="home d-flex justify-content-center align-items-center flex-column">
        <img src="../assets/logobs.png" class="" />
        <h1 class="text-center">Tentes BS</h1>
        <p class="text-muted text-center pl-3 pr-3">
            Remplissage des feuilles d'état de tentes en ligne rapidement et simplement
        </p>
        <router-link to="/etat">
            <a-button type="primary">Commencer</a-button>
        </router-link>
    </div>
</template>

<script>
import { Button } from 'ant-design-vue';

export default {
    components: {
        aButton: Button,
    },
};
</script>

<style scoped lang="scss">
    .home {

        min-height: 100vh;

        img {
            width:6rem;
        }
    }
</style>
