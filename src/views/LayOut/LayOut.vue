<template>
    <div class="common-layout">
    <el-container>
      <el-header class="common-header flex-float">
        <div class="flex">
            <img class="logo" src="../../assets/logo.png" alt="">
            <h1 class="title">商品管理系统</h1>
        </div>
        <el-button type="danger" plain>退出</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px" class="common-aside">
            
            <!-- background-color="none"   设置背景没颜色 
                text-color="#fff"          设置字体背景为白色 
                 ：router="true"

                 是否启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转 使用 default-active 来设置加载时的激活项。-->
            <el-menu
                background-color="none"  
                text-color="#fff"
                :router="true"
            >
                <el-sub-menu index="1">
                    <!-- 此处index类似于id 并且不能重复，不然点击这个其他的也会展出-->
                    <template #title>
                        <!-- icon -->
                        <el-icon><User /></el-icon>
                        <span>账号管理</span>
                    </template>
                        <el-menu-item-group>
                            <el-menu-item index="/user">账号列表</el-menu-item>
                            <!-- 此处index类似于path -->
                        </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon><Avatar /></el-icon>
                        <span>角色管理</span>
                    </template>
                        <el-menu-item-group>
                            <el-menu-item index="/roles">角色列表</el-menu-item>
                        </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>
                        <el-icon><Box /></el-icon>
                        <span>商品管理</span>
                    </template>
                        <el-menu-item-group>
                            <el-menu-item index="/goods">商品列表</el-menu-item>
                        </el-menu-item-group>
                </el-sub-menu>
                <!-- <el-sub-menu index="4">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>订单管理</span>
                    </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">订单列表</el-menu-item>
                        </el-menu-item-group>
                </el-sub-menu>
                <el-sub-menu index="5">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>数据管理</span>
                    </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">数据列表</el-menu-item>
                        </el-menu-item-group>
                </el-sub-menu> -->
            </el-menu>
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
        width: 66px;
        padding: 10px 1px 1px 1px;

    }
    .title{
        color: #fff;
    }
</style>