<template>
    <div>
        <div>
            <a-form :form="form" @submit="submit" layout="vertical">
                <a-form-item label="Modèle de tente">
                    <a-select @change="(k) => $store.commit('model', k)">
                        <a-select-option v-for="(model, key) in $store.state.models" :value="key" :key="key">
                            {{ model.name }}
                        </a-select-option>
                    </a-select>
                </a-form-item>
                <div v-if="$store.getters.model">
                    <a-form-item label="Numéro de la tente">
                        <a-select  v-decorator="['numero', { rules: [{ required: true }]}]">
                            <a-select-option v-for="tente in $store.getters.model.tentes" :value="tente" :key="tente">
                                {{ tente }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="Unité">
                        <a-select v-decorator="['unite', { rules: [{ required: true }]}]" showSearch :filterOption="searchGroupe">
                            <a-select-option v-for="item in $store.state.groupes" :key="item.id" :value="item.id">{{ item.nom }}</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="Nom de l'activité">
                        <a-input v-decorator="['activite', { rules: [{ required: true }]}]" />
                    </a-form-item>
                    <div class="row no-gutters">
                        <div class="col-6 pr-1">
                            <a-form-item label="Début activité">
                                <a-input type="date" v-decorator="['dateDebut', { rules: [{ required: true }]}]" />
                            </a-form-item>
                        </div>
                        <div class="col-6 pl-1">
                            <a-form-item label="Fin activité">
                                <a-input type="date" v-decorator="['dateFin', { rules: [{ required: true }]}]" />
                            </a-form-item>
                        </div>
                    </div>
                </div>
            </a-form>
        </div>
    </div>
</template>

<script>
import {
    Input,
    Select,
    Form,
} from 'ant-design-vue';

import StepMixin from '../../mixins/StepMixin';

export default {
    components: {
        aForm: Form,
        aFormItem: Form.Item,
        aInput: Input,
        aSelect: Select,
        aSelectOption: Select.Option,
    },
    mixins: [StepMixin],
    methods: {
        searchGroupe(input, option) {
            return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
    },
};
</script>
