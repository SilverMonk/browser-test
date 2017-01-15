<template>
    <div class="jjscripts">
        <ul >
            <li></li>
        </ul>
    </div>
</template>
<script>
/* eslint-disable */
function getJsApi() {
    return [{
        name: 'screen.width',
        value: screen.width,
        describe: '屏幕分辨率宽',
        legal: true,
    }]
}
/* eslint-enable */
export default {
    name: 'jjscripts',
    methods: {

    },
    data() {
        return {
            jsapi: getJsApi(),
        };
    },
    mounted() {

    },
};
</script>
<style lang="less">
.jjscripts {
    .el-table td.abc1 {
        background-color: black;
    }
}
</style>
