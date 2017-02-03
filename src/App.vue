<template>
    <div id="app">
        <Layout></Layout>
    </div>
</template>
<script>
import Layout from './components/Layout';
import store from './vuex/store';

export default {
    name: 'app',
    components: {
        Layout,
    },
    store,
};
</script>
<style lang='less'>
@media only screen and (min-width:360px) and (max-width:384px) {
    html {
        font-size: 64% !important;
    }
}


/*Iphone6,Iphone6plus*/

@media only screen and (min-width:385px) and (max-width:435px) {
    html {
        font-size: 82.5% !important;
    }
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-size: 100%;
}
</style>
