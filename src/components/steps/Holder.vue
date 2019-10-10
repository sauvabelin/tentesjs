<template>
    <div>
        <div class="container pt-3 pb-1">
            <keep-alive>
                <component :is="stepComponent" :data="steps[step]" ref="stepComponent" />
            </keep-alive>
        </div>
    </div>
</template>

<script>
import DynamicForm from './DynamicForm.vue';

export default {
    props: ['steps'],
    computed: {
        stepComponent() {
            const stepData = this.steps[this.step];
            if (stepData.type === 'form') return DynamicForm;
            return stepData.component;
        },
        step() {
            return this.$store.state.step;
        },
    },
};
</script>
