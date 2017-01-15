<template>
    <div class="video">
        <el-collapse>
            <el-collapse-item name="1">
                <template slot="title">
                    playsinline<i class="header-icon el-icon-information"></i>
                </template>
                <video v-on:click='videoPlay' webkit-playsinline playsinline src='http://cn-hncs-dx-v-04.acgvideo.com/vg5/0/b3/10524615-1-hd.mp4?expires=1484497200&ssig=I6siV9gQ2gazBlNwTANZ4A&oi=3059007965&nfa=MUKyIyydbjs5cQe1kXiVCw==&dynamic=1'></video>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template slot="title">
                    x5-video-player-type<i class="header-icon el-icon-information"></i>
                </template>
                <video v-on:click='videoPlay' x5-video-player-type='h5' x5-video-player-fullscreen='false' webkit-playsinline playsinline src='http://cn-hncs-dx-v-04.acgvideo.com/vg5/0/b3/10524615-1-hd.mp4?expires=1484497200&ssig=I6siV9gQ2gazBlNwTANZ4A&oi=3059007965&nfa=MUKyIyydbjs5cQe1kXiVCw==&dynamic=1'></video>
            </el-collapse-item>
            <el-collapse-item title="默认" name="3">
                <video v-on:click='videoPlay' src='http://cn-hncs-dx-v-04.acgvideo.com/vg5/0/b3/10524615-1-hd.mp4?expires=1484497200&ssig=I6siV9gQ2gazBlNwTANZ4A&oi=3059007965&nfa=MUKyIyydbjs5cQe1kXiVCw==&dynamic=1'></video>
            </el-collapse-item>
            <el-collapse-item title="controls" name="4">
                <video v-on:click='videoPlay' controls="true" webkit-playsinline playsinline src='http://cn-hncs-dx-v-04.acgvideo.com/vg5/0/b3/10524615-1-hd.mp4?expires=1484497200&ssig=I6siV9gQ2gazBlNwTANZ4A&oi=3059007965&nfa=MUKyIyydbjs5cQe1kXiVCw==&dynamic=1'></video>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
/* eslint-disable */

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
    },
    data() {
        return {};
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
