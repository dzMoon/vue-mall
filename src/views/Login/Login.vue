<template>
    <div>
        <h2>login</h2>
        <h2>{{money|fmoney}}</h2>
    </div>

</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                money: '50000'
            }
        }
    }
</script>

<style scoped>

</style>
