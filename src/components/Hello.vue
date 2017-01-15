<template>
    <div class="hello">{{msg}}
    </div>
</template>
<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.hello {
    background: blue;
    width: 100%;
    height: 100%;
}
</style>
