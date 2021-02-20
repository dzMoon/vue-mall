<template>
    <div class="input" :style="{width: width+'px' }">
        <label for="input"
               :style="{'flex-basis': labelWidth+ 'px', 'text-align': labelAlign}"
               v-if="label">{{label}}</label>
        <input
                :type="type"
                @input="input"
                :placeholder="placeholder"
                id="input"
                :style="{'flex-basis':inputWidth + 'px'}"
                :maxlength="maxlength">
        <div :style="{paddingLeft: paddingLeft + 'px'}">
            <slot name="other"></slot>
        </div>
        <div class="tip" v-if="tips" :style="{width: tipsWidth + 'px'}">{{tips}}</div>
    </div>
</template>

<script>
    export default {
        name: "ThInput",
        data() {
            return {
                paddingLeft: 0
            }
        },
        props: {
            type: {
                default: 'text',
                type: String
            },
            value: {
                default: '',
                type: String || Number
            },
            placeholder: {
                default: '',
                type: String
            },
            label: {
                default: '',
                type: String
            },
            labelWidth: {
                default: 100,
                type: Number
            },
            inputWidth: {
                default: 200,
                type: Number
            },
            labelAlign: {
                default: 'center',
                type: String
            },
            tips: {
                default: '',
                type: String
            },
            tipsWidth: 200,
            maxlength: {
                default: 20,
                type: Number
            }
        },
        computed: {
            currentValue() {
                return this.value
            },
            width() {
                // console.log(this.$slots.other)
                let slotWidth = this.$slots.other ? 200 : 0
                let tipsWidth = this.tips ? this.tipsWidth : 0
                // return this.labelWidth + this.inputWidth
                return this.labelWidth + this.inputWidth + tipsWidth + slotWidth
            }
        },
        methods: {
            /**
             * 双向数据绑定
             * */
            input(e) {
                this.$emit('input', e.target.value) //双向绑定
                /**
                 * chage监听input事件
                 * e: 当前事件对象
                 * value： 当前input框值
                 * cruVal：当前输入值
                 * */
                this.$emit('change', {
                    e,
                    value: this.value,
                    curVal: e.data
                })
            },
            /**
             * 暴露获取input内容
             * */
            getValue() {
                this.$emit('getValue', this.value)
            }
        },
        created() {
            if (this.$slots.other) {
                this.paddingLeft = 10
            } else {
                this.paddingLeft = 0
            }
        }
    }
</script>

<style scoped>
    .input {
        height: 38px;
        display: flex;
    }

    input {
        height: 100%;
        background: transparent;
        outline: none;
        border: 1px solid var(--border-color);
        border-radius: var(--global-border-radius);
        padding: 5px 8px;
        flex-basis: 200px;
        display: block;
    }

    .input label {
        padding: 0 10px;
        height: 100%;
        display: block;
        line-height: 34px;
    }

    .tip {
        padding-left: 10px;
    }
</style>
