<template>
    <div class="select-item" :disabled="disabled" :value="value" @click="select">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            value: {
                default: '',
                type: String || Number
            },
            disabled:  false // 是否允许点击 默认允许
        },
        methods: {
            /**
             * 点击事件
             * */
            select() {
                if(this.disabled === "") return
                this.$parent.input(this.value) // 调用父组件 ThSelect input方法
            }
        }
    }
</script>

<style scoped>
    .select-item {
        height: 38px;
        padding: 3px 10px;
        width: 100%;
        background: transparent;
        line-height: 30px;
        border-radius: var(--global-border-radius);
        transition: all .3s;
    }

    .select-item:not([disabled]):hover {
        background: var(--global-active-bg-color);
        color: #ffffff;
    }

    .select-item[disabled=disabled] {
        cursor: not-allowed;
        background: var(--btn-deactive-bgcolor);
        color: #ffffff;
    }
</style>
