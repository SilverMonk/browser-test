<template>
    <div class="sys-effect">
        <el-card :body-style="{ padding: '0px' }">
            <img src="~assets/logo.png" class="image">
            <div style="padding: 14px;">
                <span>Filter 效果</span>
                <div class="bottom clearfix">
                    <el-select multiple v-model="value" placeholder="请选择" @change='changeFilterEffect'>
                        <el-option v-for="item in options" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>
/* eslint-disable */

/* eslint-enable */
export default {
    name: 'sys-effect',
    methods: {
        changeFilterEffect: function() {
            // switch (value) {
            //     case 'grayscale':
            //         this.value = 'grayscale';
            //         break;
            //     case 'sepia':
            //         this.value = 'sepia';
            //         break;
            //     case 'saturate':
            //         this.value = 'saturate';
            //         break;
            //     case 'hue-rotate':
            //         this.value = 'hue-rotate';
            //         break;
            //     case 'invert':
            //         this.value = 'invert';
            //         break;
            //     case 'opacity-filter':
            //         this.value = 'opacity-filter';
            //         break;
            //     case 'brightness':
            //         this.value = 'brightness';
            //         break;
            //     case 'contrast':
            //         this.value = 'contrast';
            //         break;
            //     case 'blur':
            //         this.value = 'blur';
            //         break;
            //     case 'drop-shadow':
            //         this.value = 'drop-shadow';
            //         break;
            //     default:
            //         this.value = 'base';
            // }
        },
    },
    data() {
        return {
            options: [{
                value: 'grayscale',
                label: 'grayscale灰度',
            }, {
                value: 'sepia',
                label: 'sepia褐色',
            }, {
                value: 'saturate',
                label: 'saturate饱和度',
            }, {
                value: 'hue-rotate',
                label: 'hue-rotate色相旋转',
            }, {
                value: 'invert',
                label: 'invert反色',
            }, {
                value: 'opacity-filter',
                label: 'opacity透明度',
            }, {
                value: 'brightness',
                label: 'brightness亮度',
            }, {
                value: 'contrast',
                label: 'contrast对比度',
            }, {
                value: 'blur',
                label: 'blur模糊',
            }, {
                value: 'drop-shadow',
                label: 'drop-shadow阴影',
            }],
            value: '',
        };
    },
    mounted() {},
};
</script>
<style lang="less">
.sys-effect {}
</style>
