<template>
    <div class="common-layout">
    <el-container>
      <el-header class="common-header flex-float">
        <div class="flex">
            <img class="logo" src="../../assets/logo.png" alt="">
            <h1 class="title">商品管理系统</h1>
        </div>
        <el-button type="success" plain>退出</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px" class="common-aside">
            <router-link to="/index">角色列表</router-link>
            <router-link to="/user">用户列表</router-link>
        </el-aside>
        <el-main>
            <!-- router-view -->
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script>
    export default{
        name:"layout",

    }
</script>

<style>
/* 头部和侧边颜色及侧边高度设置为100vh */
    .el-container{
        height: 100vh;
        overflow: hidden;
    }
    .common-header{
        background: rgb(42, 48, 57);
        /* flex布局 */
        display: flex;
    }
    .common-aside{
        background: rgb(48,55,65);
    }
    .logo{
        width: 80px;
    }
    .title{
        color: #fff;
    }
</style>