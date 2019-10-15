<template>
    <div id="app">
        <transition name="fade">
            <div id="loader" class="d-flex flex-column align-items-center justify-content-center" v-if="$store.state.loading">
                <a-spin>
                    <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
                </a-spin>
            </div>
        </transition>
        <div class="blurrer" :class="{ active: $store.state.loading }">
            <router-view/>
        </div>
    </div>
</template>

<script>
import { Spin, Icon } from 'ant-design-vue';

export default {
    components: {
        aSpin: Spin,
        aIcon: Icon,
    },
};
</script>

<style scoped lang="scss">
    #loader {

        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100vh;
        background:rgba(255,255,255,0.5);
        z-index:1000;
    }

    .blurrer {

        filter: blur(0);
        transform: scale(1);
        transition: filter .5s, transform .5s;

        &.active {

            filter: blur(5px);
            transform: scale(0.9);
        }
    }
</style>
