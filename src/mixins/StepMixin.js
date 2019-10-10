export default {
    data() {
        return {
            form: this.$form.createForm(this),
        };
    },
    methods: {
        submit() {
            this.form.validateFields((err, values) => {
                console.log(err);
                if (!err) {
                    console.log(values);
                }
            });
        },
    },
};
