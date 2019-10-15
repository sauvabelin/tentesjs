export default {
    data() {
        return {
            form: this.$form.createForm(this),
        };
    },
    methods: {
        submit() {
            let next = false;
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.$store.commit('setFormValues', values);
                    next = true;
                }
            });
            return next;
        },
    },
};
