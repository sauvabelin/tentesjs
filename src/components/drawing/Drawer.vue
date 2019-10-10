<template>
    <div>
        <div class="drawer" ref="globalcontainer">
            <div class="image-bg" ref="container">
            </div>
            <div class="canvas-holder">
                <canvas class="canvas" ref="drawer"></canvas>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    /*
    mounted() {
        const image = new Image();
        image.src = require('../../assets/images/toile_exterieure.jpg');
        image.onload = () => {
            this.$refs.bgimage.src = image.src;
            const containerWidth = this.$refs.container.clientWidth;
            const ratio = containerWidth / image.width;
            const imageHeight = ratio * image.height;

            setTimeout(() => {
            }, 500);
        };
    },
    */
};
</script>

<style scoped lang="scss">
    .drawer {

        position:relative;

        .image-bg {

            img {

                width:100%;
            }
        }

        .canvas-holder {
            position: absolute;
            top: 0;
        }
    }
</style>
