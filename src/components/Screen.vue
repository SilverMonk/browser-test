<template>
    <div class="screen">
        <template>
            <el-table :data="screen" style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column type="expand">
                    <template scope="props">
                        <p>code: {{ props.row.name }}</p>
                    </template>
                </el-table-column>
                <el-table-column label="key" prop="describe">
                </el-table-column>
                <el-table-column label="value" prop="value">
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>
<script>
/* eslint-disable */
function getScreen() {
    return [{
            name: 'screen.width',
            value: screen.width,
            describe: '屏幕分辨率宽',
        }, {
            name: 'screen.height',
            value: screen.height,
            describe: '屏幕分辨率高',
        },
        //  {
        //     name: 'screen.availWidth',
        //     value: screen.availWidth,
        //     describe: '屏幕可用宽',
        // }, {
        //     name: 'screen.availHeight',
        //     value: screen.availHeight,
        //     describe: '屏幕可用高',
        // }, {
        //     name: 'document.body.clientWidth',
        //     value: document.body.clientWidth,
        //     describe: '网页可见区域宽',
        // }, {
        //     name: 'document.body.clientHeight',
        //     value: document.body.clientHeight,
        //     describe: '网页可见区域高',
        // }, {
        //     name: 'document.body.offsetWidth',
        //     value: document.body.offsetWidth,
        //     describe: '网页可见区域宽(包括边线的宽)',
        // }, {
        //     name: 'document.body.offsetHeight',
        //     value: document.body.offsetHeight,
        //     describe: '网页可见区域高(包括边线的宽)',
        // }, 
        {
            name: 'document.body.scrollWidth',
            value: document.body.scrollWidth,
            describe: '网页正文全文宽',
        }, {
            name: 'document.body.scrollHeight',
            value: document.body.scrollHeight,
            describe: '网页正文全文高',
        }, {
            name: 'document.body.scrollTop',
            value: document.body.scrollTop,
            describe: '网页被卷去的高',
        }, {
            name: 'document.body.scrollLeft',
            value: document.body.scrollLeft,
            describe: '网页被卷去的左',
        }, {
            name: 'window.screenTop',
            value: window.screenTop,
            describe: '网页正文部分上',
        }, {
            name: 'window.screenLeft',
            value: window.screenLeft,
            describe: '网页正文部分左',
        },
    ];
}
/* eslint-enable */
export default {
    name: 'screen',
    methods: {
        tableRowClassName(row, index) {
            if (index === 1 || index === 0) {
                return 'info-row';
            } else if (index === 2 || index === 3) {
                return 'positive-row';
            }
            return '';
        },
    },
    data() {
        return {
            screen: getScreen(),
        };
    },
    mounted() {
        const self = this;
        /* eslint-disable */
        window.onresize = function() {
            setTimeout(function() {
                self.screen = getScreen();
            }, 500);
        };
        /* eslint-enable */
    },

};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.screen {
    background: blue;
    width: 100%;
    height: 100%;
    .el-table .info-row {
        background: #c9e5f5;
    }
    .el-table .positive-row {
        background: #e2f0e4;
    }
}
</style>
