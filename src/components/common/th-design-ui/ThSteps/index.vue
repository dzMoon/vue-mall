<template>
    <div class="steps">
        <div class="step" v-for="(item, index) in steps" :key="item.title"
             :class="{step: true, active: current >= index}">
            <div v-if="index == 0">
                <div class="step-nav">
                    <div class="empty"></div>
                    <div class="step-index" v-if="showNum">{{index+1}}</div>
                    <div class="step-line"></div>
                </div>
                <div class="step-text">{{item.title}}</div>
            </div>
            <div v-else-if="index == steps.length-1">
                <div class="step-nav">
                    <div class="step-line"></div>
                    <div class="step-index" v-if="showNum">{{index+1}}</div>
                    <div class="empty"></div>
                </div>
                <div class="step-text">{{item.title}}</div>
            </div>
            <div v-else>
                <div class="step-nav">
                    <div class="step-line"></div>
                    <div class="step-index" v-if="showNum">{{index+1}}</div>
                    <div class="step-line"></div>
                </div>
                <div class="step-text">{{item.title}}</div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "ThSteps",
        props: {
            current: {
                default: 1,
                type: Number
            },
            steps: {
                default: () => [],
                type: Array
            },
            showNum: {
                default: true,
                type: Boolean
            }
        }
    }
</script>

<style scoped>

    .steps {
        display: flex;
        cursor: pointer;
        padding: 10px;
    }

    .step {
        flex: 1;
        /*height: 40px;*/
        line-height: 40px;
    }

    .step-nav {
        flex: 1;
        display: flex;
        flex-basis: 100%;
        align-items: center;
    }

    .step > div {
        text-align: center;
    }

    .step-index:first-child, .step-index:last-child {
        width: 50%;
    }

    .step-index {
        flex-basis: 40px;
        height: 40px;
        text-align: center;
        background: var(--global-bg-color);
        color: #fff;
        line-height: 36px;
        font-size: 18px;
        border-radius: 50%;
        flex-shrink: 0;
        flex-grow: 0;
    }

    .step-line {
        width: 100%;
        height: 15px;
        background: var(--global-bg-color);
        flex-basis: 100%;
    }

    .step.active .step-line {
        background: var(--global-active-bg-color);
    }

    /*.step:first-child.active .step-line {*/
    /*    width: 50%;*/
    /*}*/

    /*.step:last-child.active .step-line {*/
    /*    width: 50%;*/
    /*}*/
    .step.active .step-text {
        color: var(--global-active-bg-color)
    }

    .step.active .step-index {
        background: var(--global-active-bg-color);
        color: #ffffff;
    }

    .step-text {
        flex: 1;
        flex-basis: 20%;
    }

    .empty {
        width: 100%;
    }
</style>
