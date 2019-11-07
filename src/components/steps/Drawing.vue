<template>
    <div>
        <p class="text-muted">
            Vous pouvez dessiner sur l'image les zones qui sont endommagées ou qui posent problème.
        </p>
        <div ref="container" class="position-relative pb-3">
            <div class="image-holder">
                <img ref="bgpict" alt="bg-image" />
            </div>
            <div class="canvas-holder">
                <canvas ref="canvas"></canvas>
            </div>
            <div class="toolbar pt-3">
                <a-button shape="circle" type="primary" icon="undo" class="mr-1" @click="drawing.remove(drawing.getObjects().slice(-1)[0])" />
                <a-button shape="circle" type="primary" icon="delete" @click="drawing.clear()" />
            </div>
            <div class="remarques pt-3">
                <p class="mb-1">Remarques</p>
                <a-textarea placeholder="Précisions additionnelles" v-model="remarques" />
            </div>
        </div>
    </div>
</template>

<script>
import { Button, Input } from 'ant-design-vue';

export default {
    props: ['data'],
    components: {
        aButton: Button,
        aTextarea: Input.TextArea,
    },
    data() {
        return {
            drawing: null,
            remarques: null,
            width: 0,
            height: 0,
        };
    },
    mounted() {
        const image = new Image();
        image.onload = () => {
            const { container, bgpict, canvas } = this.$refs;
            const containerWidth = container.clientWidth;
            const ratio = containerWidth / image.width;
            const newHeight = image.height * ratio;
            bgpict.style.width = `${containerWidth}px`;
            bgpict.style.height = `${newHeight}px`;
            bgpict.src = image.src;

            // Load fabric
            // eslint-disable-next-line
            this.drawing = new fabric.Canvas(canvas, {
                isDrawingMode: true,
                width: containerWidth,
                height: newHeight,
            });

            this.width = containerWidth;
            this.height = newHeight;

            this.drawing.freeDrawingBrush.color = 'red';
        };
        image.src = `${process.env.VUE_APP_NETBS_BASE_URL}tentes/uploads/${this.data.image}`;
    },
    methods: {
        submit() {
            console.log(this.drawing.getObjects());
            this.$store.commit('setFormValues', {
                remarques: this.remarques,
                drawing: {
                    width: this.width,
                    height: this.height,
                    data: this.drawing.getObjects(),
                },
            });
            return true;
        },
    },
};
</script>

<style scoped lang="scss">
    .canvas-holder {
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        border:3px dashed rgb(162, 166, 202);
    }
</style>
