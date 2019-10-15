<template>
    <div class="container home d-flex justify-content-center align-items-center flex-column">
        <img src="../assets/logobs.png" class="" />
        <h1 class="text-center">Tentes BS</h1>
        <p class="text-muted text-center pl-3 pr-3">
            Remplissage des feuilles d'état de tentes en ligne rapidement et simplement
        </p>
        <a-input v-model="username" placeholder="Nom d'utilisateur" />
        <a-input class="mt-2 mb-2" v-model="password" placeholder="Mot de passe" type="password" />
        <a-button block type="primary" @click="login">Commencer</a-button>
    </div>
</template>

<script>
import { Input, Button } from 'ant-design-vue';

export default {
    components: {
        aInput: Input,
        aButton: Button,
    },
    data() {
        return {
            username: null,
            password: null,
        };
    },
    methods: {
        async login() {
            const { username, password } = this;
            this.$store.dispatch('logIn', { username, password }).then((logged) => {
                if (!logged) {
                    this.$toasted.show('Mot de passe incorrect', { type: 'error' });
                } else {
                    this.$router.push('/etat');
                }
            });
        },
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
