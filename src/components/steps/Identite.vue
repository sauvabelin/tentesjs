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
                        <a-select v-decorator="['unite', { rules: [{ required: true }]}]">
                            <a-select-option value="1">Zanfleuron</a-select-option>
                            <a-select-option value="12">Armina</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="Activité">
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
};
</script>
