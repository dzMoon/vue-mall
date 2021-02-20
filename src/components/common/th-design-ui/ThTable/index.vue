<template>
    <div class="ant-table-body">
        <table class="">

            <thead class="ant-table-thead">
            <tr>
                <th v-for="(item,index) in columns" :key="index">
                    {{item.title}}
                </th>
            </tr>
            </thead>
            <tbody class="ant-table-tbody">
            <tr v-for="item in dataSource">
                <td v-for="(data, index) in columns " :key="index">
                    <div>{{ item[data.dataIndex]}}</div>
                </td>
            </tr>
            </tbody>
        </table>
        {{currentPage}}

        <ul>
            <li @click="prev">上一页</li>
            <li v-for="index of totalPage" :class="{active: currentPage==index}">
                <div v-if="totalPage <= 7" @click="change(index)">
                    <a>{{index}}</a>
                </div>
                <div v-else>
                    <div v-if="index <= 3" class="xiaoyu">
                        <a v-if="index < 3" @click="change(index)">{{index}}</a>
                        <a v-if="index === 3" @click="nextFive">•••</a>
                    </div>
                    <div v-else-if="index >=(totalPage-2)" class="dayu">
                        <a v-if="index === totalPage-2" @click="prveFive">•••</a>
                        <a v-if="index < 3" @click="change(index)">{{index}}</a>
                    </div>
                    <div v-else class="else">
                        <a @click="change(index)">{{index}}</a>
                    </div>
                </div>
            </li>
            <li @click="next">下一页</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ThTable",
        data() {
            return {
                currentPage: 1 // 当前页面
            }
        },
        components: {},
        props: {
            dataSource: { // 数据源
                default: () => [],
                type: Array
            },
            columns: { // 表格头部， 需展示字段
                default: () => [],
                type: Array
            },
            defaultLine: { // 默认展示条数
                default: 10,
                type: Number
            },
            totalPage: { // 总页码
                default: 1,
                type: Number
            },

        },
        methods: {
            change(index) {
                this.currentPage = index
                this.$emit('input', this.currentPage)
                this.$emit('change', this.currentPage)

            },
            next() {
                if (this.currentPage < this.totalPage) this.currentPage++
            },
            nextFive() {
                if (this.currentPage < this.totalPage-5) this.currentPage+=5
            },
            prev() {
                if (this.currentPage > 1) this.currentPage--

            },
            prveFive() {
                if (this.currentPage > 5) this.currentPage-=5

            }
        }
    }
</script>

<style scoped>
    .thead {
        display: flex;
        text-align: center;

    }

    .th {
        flex: 1;
    }
    .active{
        color: var(--global-active-color);
    }
</style>
