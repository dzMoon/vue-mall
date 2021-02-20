<template>
    <div>
        <h2>home页</h2>
        <th-table :dataSource="data" :columns="columns" :totalPage="10"></th-table>
        <th-steps :steps="steps" :current="current"></th-steps>
        <th-time-line>
            <th-time-line-item>qqqq</th-time-line-item>
            <th-time-line-item icon="pending">qqqq</th-time-line-item>
            <th-time-line-item>eeee</th-time-line-item>
        </th-time-line>

        <th-input @change="input" label="aaaa" v-model="value2"></th-input>


        <th-radio v-model="value" :radioList="radioList" @onChange="change"></th-radio>

        <th-select  v-model="value3" @onChange="change2">
            <th-select-option value="aaaa" disabled>aaaa</th-select-option>
            <th-select-option value="bbbb">bbbb</th-select-option>
            <th-select-option value="cccc">cccc</th-select-option>
        </th-select>


        <button @click="test">测试</button>


        <send-code :mess="mess" label="验证码：" labelAlign="right" :width="150"/>
    </div>
</template>

<script>
    import SendCode from 'components/context/SendCode'
    export default {
        name: "home",
        data() {
            return {
                columns: [
                    {
                        title: 'Name',
                        dataIndex: 'name',
                        format: 'fmoney',
                    },
                    {
                        title: 'Age',
                        dataIndex: 'age',
                    },
                    {
                        title: 'Address',
                        dataIndex: 'address',
                    },
                    {
                        title: 'Long Column Long Column Long Column',
                        dataIndex: 'tags',
                    },
                ],
                data: [
                    {
                        key: '1',
                        name: 'John Brown',
                        age: 32,
                        address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
                        tags: ['nice', 'developer'],
                    },
                    {
                        key: '2',
                        name: 'Jim Green',
                        age: 42,
                        address: 'London No. 2 Lake Park, London No. 2 Lake Park',
                        tags: ['loser'],
                    },
                    {
                        key: '3',
                        name: 'Joe Black',
                        age: 32,
                        address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
                        tags: ['cool', 'teacher'],
                    },
                ],
                steps: [
                    {title: '第一步'},
                    {title: '第二步'},
                    {title: '第三步'},
                ],
                current: 1,
                value: 'b',
                radioList: ['a', 'b', 'c', 'd'],
                value2: '',
                value3: '',
                mess: '获取短信验证码'
            }
        },
        components: {
            // ThTable,
            // ThSteps,
            // ThTimeLine,
            // ThTimeLineItem,
            // ThInput,
            // ThRadio,
            // ThSelectOption,
            // ThSelect,
            SendCode
        },
        created() {
            // this.$toast('qqqqq')
            // this.$loading()
            // setTimeout(() =>{
            //     this.$loading(false)
            //
            // }, 5000)
            // this.$alert("qwe123", () => {
            //     alert(1)
            // }, '我知道了')
            // this.$request({
            //     funcNo: '102020'
            // }).then((res => {
            //     // console.log(res)
            // })).catch(err => {
            //     // console.log(err)
            // })
        },
        methods: {
            input(e) {
                console.log(e)
            },
            change(e) {
                console.log(this.value)
                // this.value=e.value
            },
            change2(e) {
              console.log(e)
            },
            test() {
                console.log(this.value3)
            }
        }
    }
</script>

<style scoped>

</style>
