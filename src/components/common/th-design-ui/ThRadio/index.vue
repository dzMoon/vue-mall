<template>
    <div class="radio"
         :style="{'flex-direction': direction}">
        <div class="item"
             v-for="(item, index) in radioList"
             :class="{active: item === currentValue}"
             @click="select(index)">
            <div class="icon"></div>
            <div class="text">{{item}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {}
        },
        props: {
            radioList: { //数组默认值为函数
                type: Array,
                default: () => []
            },
            direction: {
                type: String,
                default: 'rows' // rows ||column
            },
            value: {
                type: String || Number,
                default: ''
            }
        },
        computed: {
            currentValue() { //动态绑定当前元素
                return this.value
            }
        },
        created() {
            this.$emit('input', this.currentValue)
        }
        ,
        methods: {
            select(index) {
                this.$emit('input', this.radioList[index]) // 实现双向数据绑定
                this.$emit('onChange', { //父组件监听 onChange事件
                    index: index,
                    value: this.radioList[index]
                })
            }
        }
    }
</script>

<style scoped>
    .radio {
        display: inline-flex;
    }

    .item {
        display: flex;
        padding: 8px 10px;
        flex-grow: 1;
        min-width: 200px;
    }

    .icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 4px;
        border: 2px solid var(--border-color);
    }

    .item.active .icon {
        border-color: var(--border-acitve-color);
        background: var(--border-acitve-color);
        background-clip: content-box;
    }

    .text {
        line-height: 20px;
        padding: 0 10px;
    }
</style>
