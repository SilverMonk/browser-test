<template>
    <div class="video">
        <el-collapse>
            <el-collapse-item name="1">
                <template slot="title">
                    playsinline<i class="header-icon el-icon-information"></i>
                </template>
                <video v-on:click='videoPlay' webkit-playsinline playsinline :src='videoUrl'></video>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template slot="title">
                    x5-video-player-type<i class="header-icon el-icon-information"></i>
                </template>
                <video v-on:click='videoPlay' x5-video-player-type='h5' x5-video-player-fullscreen='false' webkit-playsinline playsinline :src='videoUrl'></video>
            </el-collapse-item>
            <el-collapse-item title="默认" name="3">
                <video v-on:click='videoPlay' :src='videoUrl'></video>
            </el-collapse-item>
            <el-collapse-item title="controls" name="4">
                <video v-on:click='videoPlay' controls="true" webkit-playsinline playsinline :src='videoUrl'></video>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
/* eslint-disable */
import vurl from '../assets/video-demo.mp4';
/* eslint-enable */
export default {
    name: 'video',
    methods: {
        videoPlay: function(event) {
            if (event.target.paused) {
                event.target.play();
            } else {
                event.target.pause();
            }
        },
        // test: function() {
        //     let x = '';
        //     switch (day) {
        //         case 0:
        //             x = 'Today its Sunday';
        //             break;
        //         case 1:
        //             x = 'Today its Monday';
        //             break;
        //         case 2:
        //             x = 'Today its Tuesday';
        //             break;
        //         case 3:
        //             x = 'Today its Wednesday';
        //             break;
        //         case 4:
        //             x = 'Today its Thursday';
        //             break;
        //         case 5:
        //             x = 'Today its Friday';
        //             break;
        //         case 6:
        //             x = 'Today its Saturday';
        //             break;
        //     }
        // },
    },
    data() {
        return {
            videoUrl: vurl,
        };
    },
    mounted() {

    },

};
</script>
<style scoped lang="less">
.video {
    text-align: left;
    video {
        width: 100%;
        border: 1px solid black;
    }
    i {
        margin: 0 10px;
    }
}
</style>
