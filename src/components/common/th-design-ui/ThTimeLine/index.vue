<template>
    <div class="time-lines">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "ThTimeline"
    }
</script>

<style scoped>
    .time-lines {
        position: relative;
    }

    .time-lines::before {
        content: "";
        background: var(--global-active-color);
        width: 2px;
        position: absolute;
        left: 14px;
        top:15%;
        height: 70%;
    }
</style>
