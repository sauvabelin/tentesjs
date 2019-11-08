<template>
    <div>
        <a-form :form="form" @submit="submit" layout="vertical">
            <template v-for="(item, key) in data">
                <div :key="key">
                    <div v-if="item.type === 'header' && item.subtype !== 'h1'">
                        <h3>{{ ct(item.label) }}</h3>
                    </div>
                    <div v-else class="mb-2">
                        <a-form-item v-if="item.type !== 'header'" :label="ct(item.label)">
                            <a-textarea v-if="item.type === 'textarea'" v-decorator="decorator(item)" :placeholder="item.placeholder" />
                            <a-select v-else-if="item.type === 'select'" v-decorator="decorator(item)" :placeholder="item.placeholder">
                                <a-select-option v-for="option in item.values" :key="option.value" :value="option.value">
                                    {{ option.label }}
                                </a-select-option>
                            </a-select>
                            <a-checkbox-group v-else-if="item.type === 'checkbox-group'" v-decorator="decorator(item)">
                                <a-checkbox v-for="option in item.values" :key="option.value" :value="option.value">{{ option.label }}</a-checkbox>
                            </a-checkbox-group>
                            <a-input v-else-if="item.type === 'number'" v-decorator="decorator(item)" :placeholder="item.placeholder" type="number" />
                            <a-input v-else-if="item.type === 'date'" v-decorator="decorator(item)" :placeholder="item.placeholder" type="date" />
                            <a-input v-else-if="item.type === 'text'" v-decorator="decorator(item)" :placeholder="item.placeholder" />
                        </a-form-item>
                    </div>
                </div>
            </template>
        </a-form>
    </div>
</template>

<script>
import {
    Input,
    Select,
    Checkbox,
    Form,
} from 'ant-design-vue';

import StepMixin from '../../mixins/StepMixin';

export default {
    name: 'dynamic-form',
    props: ['data'],
    mixins: [StepMixin],
    components: {
        aForm: Form,
        aFormItem: Form.Item,
        aInput: Input,
        aTextarea: Input.TextArea,
        aSelect: Select,
        aSelectOption: Select.Option,
        aCheckbox: Checkbox,
        aCheckboxGroup: Checkbox.Group,
    },
    mounted() {
        const values = this.data.filter(it => ['number', 'date', 'text', 'textarea'].includes(it.type))
            .reduce((holder, item) => {
                // eslint-disable-next-line
                if (item.value) holder[item.name] = item.value;
                return holder;
            }, {});
        this.form.setFieldsValue(values);
    },
    methods: {
        ct(title) {
            return title.replace('<br>', '');
        },
        decorator(item) {
            const rules = [];
            rules.push({ required: item.required === true });

            if (item.type === 'number') {
                if (item.min !== undefined) rules.push({ min: item.min });
                if (item.max !== undefined) rules.push({ max: item.max });
            }
            return [item.name, { rules }];
        },
    },
};
</script>
