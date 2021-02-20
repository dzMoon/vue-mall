<template>
    <div id="vue-toast" class="mask">
        <div class="mess" v-html="message"></div>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data() {
            return {
                message: ''
            }
        }
    }
</script>

<style scoped>
    .mask {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .mess {
        padding: 15px 30px;
        background: rgba(0, 0, 0, .5);
        color: #ffffff;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 5px;
        line-height: 1.8;
        font-size: var(--global-font-size);
    }
</style>
