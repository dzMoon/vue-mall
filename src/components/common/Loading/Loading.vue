<template>
    <div id="vue-loading" class="mask">
        <img src="~assets/img/loading.gif" alt="">
    </div>
</template>

<script>
    export default {
        name: "Loading",
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
    .mask img{
        width: 50px;
        height: 50px;
    }
</style>
