<template>
    <div>
        <div class="steps-chooser p-3 d-flex flex-column justify-content-between" :class="{ visible }">
            <div class="step pt-1 pb-1 d-flex align-items-center" v-for="(s, key) in steps" :key="key">
                <a-button block @click="moveTo(key)" :type="step === key ? 'primary' : 'default'">{{ titleParser(s) }}</a-button>
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
    props: ['visible', 'steps', 'titleParser'],
    computed: {
        step() {
            return this.$store.state.step;
        },
    },
    methods: {
        moveTo(step) {
            this.$store.commit('step', step);
            this.$emit('close');
        },
    },
};
</script>

<style scoped lang="scss">
    .steps-chooser {
        position:absolute;
        width:100%;
        background: #eee;
        box-shadow: inset 0 -5px 10px rgba(0,0,0,0.08);
        height:200px;
        transform: translateY(-200px);
        transition: transform .3s;

        &.visible {
            transform: translateY(0);
        }
    }
</style>
