<template>
    <button
            @click="clickBtn"
            :disabled="disabled"
            :style="{'width': width+'px', height: height+'px', lineHeight:  height - 10 +'px'}">
        <slot></slot>
        {{mess}}
    </button>
</template>

<script>
    export default {
        name: "index",
        props: {
            width: {
                default: 200,
                type: Number,
            },
            height: {
                default: 38,
                type: Number,
            },
            mess: {
                default: '',
                type: String
            },
            disabled: false
        },
        methods: {
            clickBtn(e) {
                if(this.disabled === "") return
                this.$emit('btnClick', e)
            }
        }
    }
</script>

<style scoped>
    button {
        background: var(--global-active-bg-color);
        color: #fff;
        text-align: center;
        border: 0;
        border-radius: var(--global-border-radius);
        cursor: pointer;
        outline: none;
    }
    button[disabled] {
        background: var(--btn-deactive-bgcolor);
        cursor: not-allowed;
    }
</style>
