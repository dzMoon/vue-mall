import ThStepsComponent from './ThSteps'
import ThTableComponent from './ThTable'
import ThInputComponent from "./ThInput"
import ThTimeLineItemComponent from "./ThTimeLineItem"
import ThTimeLineComponent from "./ThTimeLine"
import ThRadioComponent from "./ThRadio"
import ThSelectComponent from './ThSelect'
import ThSelectOptionComponent from './ThSelectOption'
import ThButtonComponent from './ThButton'
const UI = {
    installed: false,
    install(Vue){
        if(UI.installed) return
        Vue.component('ThSteps', ThStepsComponent)     // 进度条
        Vue.component('ThTable', ThTableComponent)     // 表格
        Vue.component('ThInput', ThInputComponent)     // 输入框
        Vue.component('ThTimeLineItem', ThTimeLineItemComponent)     // 时间轴组件组
        Vue.component('ThTimeLine', ThTimeLineComponent)     // 时间轴组件
        Vue.component('ThRadio', ThRadioComponent)     // 单选框
        Vue.component('ThSelect', ThSelectComponent)     // 下拉框父组件
        Vue.component('ThSelectOption', ThSelectOptionComponent)     // 下拉框选择组件
        Vue.component('ThButton', ThButtonComponent)     // 按钮组件
        UI.installed = true
    }
}
export default UI
