<template>
    <div id="vue-confirm" v-if="show">
        <div class="info">
            <div v-html="message"></div>
            <div>
                <div class="button" @click="cancel">{{okBtn}}</div>
                <div class="button" @click="sure">{{cancelBtn}}</div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Confirm",
        data() {
            return {
                message: '',
                show: false,
                okBtn: "确定",
                cancelBtn: "取消",
            }
        },
        methods: {
            cancel() {
                this.show = false
                this.message = ''
                this.okBtn = '确定'
                this.cancelBtn = '取消'
                this.cancelFunc && this.cancelFunc()
            },
            sure() {
                this.show = false
                this.message = ''
                this.okBtn = '确定'
                this.cancelBtn = '取消'
                this.okFunc && this.okFunc()
            }
        }
    }
</script>

<style scoped>
    #vue-confirm {
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
