<template>
    <div class="time-item" :icon="icon">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ThTimelineItem",
        props: {
            icon: {
                default: 'complete',
                type: String,
            }
        }
    }
</script>

<style scoped>
    .time-item {
        position: relative;
        padding-left: 30px;
        line-height: 40px;
    }
    .time-item::before{
        content: "";
        position: absolute;
    }
    .time-item[icon='complete']::before {
        left: 7px;
        width: 15px;
        border-radius: 50%;
        background: var(--global-active-color);
        height: 15px;
        top: 16px;
    }

    .time-item[icon="pending"]::before {
        background-image: url('~assets/img/time-wait.png');
        background-size: 100% 100%;
        width: 25px;
        height: 25px;
        left: 2px;
        top: 10px;
    }

    .time-item[icon='load']::before {
        /*background: url("~assets/img/time-wait.png");*/

    }
</style>
