<template>
    <div class="select" :style="{width: width+'px'}">
        <div class="current-val" @click="toggle">
            {{value}}
        </div>
        <div class="select-list" v-show="showList">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                showList: false,
                value: ''
            }
        },
        created() {
            this.value = this.defaultValue ? this.defaultValue : '请选择'
        },
        props: {
            defaultValue: {
                default: '',
                type: String
            },
            width: {
                default: 200,
                type: Number
            }
        },
        methods: {
            /**
             * 开启或者关闭下拉框
             * */
            toggle() {
                this.showList = !this.showList
            },
            /**
             * 实现双向数据绑定
             * */
            input(e) {
                this.value = e
                this.showList = false
                this.$emit('input', e) // 暴露input，双向数据绑定
                this.$emit('onChange', e) // 暴露onChange，外部监听点击事件
            }
        }
    }
</script>

<style scoped>
    .current-val {
        position: absolute;
        left: 0;
        top: 0;
        border: 1px solid var(--border-color);
        height: 38px;
        padding: 3px 10px;
        width: 100%;
        background: transparent;
        line-height: 30px;
        border-radius: var(--global-border-radius);
        transition: all .3s;
    }

    .select {
        position: relative;
        font-size: 16px;
        line-height: 30px;
        height: 40px;
        border-radius: var(--global-border-radius);
        cursor: pointer;
    }

    .select:hover .current-val {
        border-color: var(--border-acitve-color);
    }

    .select-list {
        width: 100%;
        position: absolute;
        top: 47px;
        left: 0;
        border: 1px solid var(--border-color);
        transition: all .3s;
        box-shadow: 0px 0px 9px 1px var(--border-color);
        border-radius: var(--global-border-radius);
    }

    .select-list:hover {

    }
</style>
