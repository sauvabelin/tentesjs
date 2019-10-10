<template>
    <div>
        <div>
            <steps-chooser :steps="steps" :titleParser="stepTitle" :visible="stepChooserVisible" @close="stepChooserVisible = false" />
            <div class="etat-content" :class="{ pushed: stepChooserVisible }">
                <step-holder :steps="steps" />
                <nav-buttons :steps="steps" :titleParser="stepTitle" />
            </div>
        </div>
    </div>
</template>

<script>
import StepHolder from '../components/steps/Holder.vue';
import NavButtons from '../components/steps/NavButtons.vue';
import StepsChooser from '../components/StepsChooser.vue';
import Identite from '../components/steps/Identite.vue';
import DynamicForm from '../components/steps/DynamicForm.vue';

export default {
    components: {
        StepsChooser,
        StepHolder,
        NavButtons,
    },
    data() {
        return {
            stepChooserVisible: true,
            steps: [{ component: Identite, title: 'Identité', type: 'component' }],
        };
    },
    mounted() {
        this.$store.dispatch('loadModels');
    },
    watch: {
        '$store.state.model': function() {
            let index = 0;
            this.$store.getters.model.form.forEach((item, key) => {
                if ((item.type === 'header' && item.subtype === 'h1')
                    || (key === 0 && (item.type !== 'header' || item.subtype !== 'h1'))) {
                    this.steps.push({ type: 'form', form: [] });
                    index += 1;
                }
                this.steps[index].form.push(item);
            });

        },
    },
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
    methods: {
        stepTitle(step) {
            if (step.type === 'form') return step.form[0].label.replace('<br>', '');
            if (step.type === 'component') return step.title;
            return '';
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
