<template>
    <div id="app">
        <div id="nav">
            <router-link to="/home">home</router-link> |
            <router-link to="/login">login</router-link>
        </div>
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: 'app',
    }
</script>
<style>
    @import "assets/css/base.css";
</style>
