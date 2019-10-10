<template>
    <div>
        <div class="container d-flex justify-content-between border-top pt-3">
            <div>
                <a-button v-if="step > 0" @click="$store.commit('step', step - 1)">
                    Retour : {{ stepTitle(steps[step - 1]) }}
                </a-button>
            </div>
            <div>
                <a-button type="primary" v-if="step < steps.length - 1" @click="nextStep">
                    Suivant : {{ stepTitle(steps[step + 1]) }}
                </a-button>
            </div>
        </div>
    </div>
</template>

<script>
import { Button } from 'ant-design-vue';

export default {
    components: {
        aButton: Button,
    },
    props: ['steps', 'stepTitle'],
    computed: {
        step() {
            return this.$store.state.step;
        },
    },
    methods: {
        nextStep() {
            // this.$refs.stepComponent.submit();
            this.$store.commit('step', this.step + 1);
        },
    },
};
</script>

<style scoped lang="scss">
    .etat-content {
        transform: translateY(0);
        transition: transform .3s;


        &.pushed {
            transform: translateY(200px);
        }
    }
</style>
