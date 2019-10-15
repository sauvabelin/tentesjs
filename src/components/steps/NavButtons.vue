<template>
    <div>
        <div class="container d-flex justify-content-between border-top pt-3 pb-3">
            <div>
                <a-button v-if="step > 0" @click="$store.commit('step', step - 1)">
                    <a-icon type="left" />
                    {{ steps[step - 1].title }}
                </a-button>
            </div>
            <div>
                <a-button type="primary" v-if="step < steps.length - 1" @click="$emit('next')">
                    {{ steps[step + 1].title }}
                    <a-icon type="right" />
                </a-button>
                <a-button v-else @click="$emit('finish')" type="primary">
                    Terminer
                    <a-icon type="check" />
                </a-button>
            </div>
        </div>
    </div>
</template>

<script>
import { Button, Icon } from 'ant-design-vue';

export default {
    components: {
        aButton: Button,
        aIcon: Icon,
    },
    props: ['steps'],
    computed: {
        step() {
            return this.$store.state.step;
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
