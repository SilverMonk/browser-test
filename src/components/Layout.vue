<template>
    <div class='sys-layout'>
        <sys-menu></sys-menu>
        <router-view class="view"></router-view>
    </div>
</template>
<script>
import sysMenu from './Menu';

export default {
    name: 'layout',
    components: {
        sysMenu,
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.sys-layout {
    .el-row,
    .el-col {
        height: 100%;
    }
}
</style>
