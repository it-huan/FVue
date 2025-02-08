<template>
    <div>
        <hi>我是导航

            <router-link to="/index">角色列表</router-link>
            <router-link to="/user">用户列表</router-link>
        </hi>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        name:"layout",

    }
</script>