<template>
    <div class="sendCode">
        <th-input
                :labelAlign="labelAlign"
                :label="label"
                :maxlength="6"
                placeholder="请输入验证码">
            <th-button
                    :disabled="disabled"
                    :width="width"
                    @click.native="clickBtn"
                    slot="other"
            >{{btnText}}
            </th-button>
        </th-input>
    </div>
</template>

<script>
    import configuration from "@/configuration";

    export default {
        name: "index",
        data() {
            return {
                _timer: null,
                btnText: '',
                sendTime: 0, // 设置倒计时长
                disabled: false,
                count: ''
            }
        },
        props: {
            mess: {
                default: '获取验证码',
                type: String
            },
            labelAlign: '',
            label: '',
            width: 0,
            sendType: 0, // 验证码类型
            mobile: '', // 手机号
            time: 0,
            activeBtnText: {
                default: '秒后重新获取',
                type: String
            },
            activeEndBtnText: {
                default: '重新获取验证码',
                type: String
            }

        },
        created() {
            this.sendTime = this.time ? this.time : configuration.sendCodeTime
            this.btnText = this.mess
        },
        methods: {
            clickBtn() { //发送短信验证码
                this.disabled = true
                this.count = this.sendTime
                this._timer = setInterval(() => {
                    if (this.count > 0) {
                        console.log(this.count)
                        this.btnText = this.count + this.activeBtnText
                        this.count--
                    } else {
                        clearInterval(this._timer)
                        this._timer = null
                        this.disabled = false
                        this.btnText = this.activeEndBtnText
                    }
                }, 1000);
            },
            shows() {
                if (this._i > 0) {
                    console.log(this._i)
                    this.btnText = this._i + this.activeBtnText
                    this._i--
                } else {
                    clearInterval(this._timer)
                    this._timer = null
                    this._i = this.sendTime;
                    this.disabled = false
                    this.btnText = this.activeEndBtnText
                }
            }
        },
        destroyed() {
            this._timer = null
            this.disabled = false
        }
    }
</script>

<style scoped>
    .sendCode {
        display: flex;
    }
</style>
