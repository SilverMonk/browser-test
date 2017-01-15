<template>
    <div class='sys-menu'>
        <el-menu mode="horizontal" default-active="1">
            <el-menu-item index='1'>
                <router-link to="./screen">屏幕尺寸</router-link>
            </el-menu-item>
            <el-menu-item index='2'>JS</el-menu-item>
            <el-menu-item index='3'>CSS</el-menu-item>
            <el-menu-item index='4'>
                <router-link to="./video">视频</router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'sysMenu',
    data() {
        return {
        };
    },
};
</script>
<style scoped lang="less">
.sys-menu {
    box-shadow: 0px 1px 4px #000;
    height: 100%;
    margin: 0 0 10px 0;
    ul {
        height: 100%;
    }
    .el-menu {
        h4 {
            background-color: black;
            color: white;
            margin: 10px 0;
        }
        .el-menu-item-group__title {
            font-size: 1rem;
        }
        .el-menu-item {
            font-size: 1rem;
        }
    }
    a {
        text-decoration: none;
    }
}
</style>
