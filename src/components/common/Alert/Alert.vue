<template>
    <div id="vue-alert" v-if="show">
        <div class="info">
            <p v-html="message"></p>
            <div class="button" @click="closeAlert">{{okBtn}}</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Alert",
        data() {
            return {
                message: '',
                show: false,
                okBtn: '确定'
            }
        },
        methods: {
            closeAlert() {
                this.show = false
                this.message = ''
                this.okBtn = '确定'
                this.okFunc && this.okFunc()
            }
        }
    }
</script>

<style scoped>
    #vue-alert {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .info{
        background: #ffffff;
    }
</style>
