<template>
    <div>
        <div>
            <div class="etat-content">
                <h2 class="main-title text-center pt-2 mb-0">{{ formatTitle(steps[step].title) }}</h2>
                <keep-alive>
                    <div class="container pt-3 pb-1">
                        <keep-alive>
                            <component :key="step" :is="stepItem.component" :data="stepItem.data" ref="stepComponent" />
                        </keep-alive>
                    </div>
                </keep-alive>
                <nav-buttons :steps="steps" @next="nextStep" :formatTitle="formatTitle" @finish="finish" />
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'ant-design-vue';
import NavButtons from '../components/steps/NavButtons.vue';
import Identite from '../components/steps/Identite.vue';
import DynamicForm from '../components/steps/DynamicForm.vue';
import Drawing from '../components/steps/Drawing.vue';

export default {
    components: {
        NavButtons,
    },
    data() {
        return {
            steps: [{ component: Identite, title: 'Identité', data: [] }],
        };
    },
    async mounted() {
        await Promise.all([
            this.$store.dispatch('loadModels'),
            this.$store.dispatch('loadGroupes'),
        ]);
    },
    watch: {
        model() {
            let index = 0;
            this.steps.splice(1);
            this.model.formData.forEach((item, key) => {
                if ((item.type === 'header' && item.subtype === 'h1')
                    || (key === 0 && (item.type !== 'header' || item.subtype !== 'h1'))) {
                    this.steps.push({ component: DynamicForm, title: item.label, data: [] });
                    index += 1;
                }
                this.steps[index].data.push(item);
            });
            this.model.drawingParts.forEach(({ image, name }) => {
                this.steps.push({ component: Drawing, title: name, data: { image, name } });
            });
        },
    },
    methods: {
        formatTitle(str) {
            return str.replace('<br>', '');
        },
        nextStep() {
            const validated = this.$refs.stepComponent.submit();
            if (validated) {
                this.$store.commit('step', this.step + 1);
            }
        },
        async finish() {
            const validated = this.$refs.stepComponent.submit();
            if (validated) {
                const sent = await this.$store.dispatch('sendFormData');
                if (sent) {
                    Modal.success({
                        title: 'Feuille d\'état envoyée',
                        content: 'La feuille a été validée et envoyée correctement.',
                        okText: 'Lourd! Déconnecte moi',
                        onOk: () => {
                            this.$router.push('/');
                        },
                    });
                }
            }
        },
    },
    computed: {
        model() {
            return this.$store.getters.model;
        },
        step() {
            return this.$store.state.step;
        },
        stepItem() {
            return this.steps[this.step];
        },
    },
};
</script>

<style scoped lang="scss">
    .main-title {

        width: 100%;
        overflow: hidden;
    }
</style>
