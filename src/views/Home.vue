<template>
    <div class="container flex_col">
        <Header class="header"/>
        <main class="flex_box_full">
            <Nav class="nav"/>
            <Main class="main flex_box_full"/>
        </main>
<!--        <Sky class="sky"/>-->
    </div>
</template>

<script>
    import Header from './Head/Header'
    import Nav from './Nav'
    import Main from './Main'
    import Sky from './pages/Sky.vue'

    export default {
        name: 'home',
        components: {Sky, Nav, Main, Header}
    }
</script>
<style scoped lang="less">
    @header-height: 60px;
    @OPACITY:1;
    .opa{
        opacity: @OPACITY;
    }
    .container {
        height: 100%;
        width: 100%;
        .header {
            .opa;
            height: @header-height;
            line-height: @header-height;
        }

        main {
            .opa;
            display: flex;

            > * {
                height: 100%;
                overflow: hidden;
            }

            .nav {
                width: 220px;
            }

            .main {
                padding: 10px;
                flex: 1;
            }
        }
        .sky{
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: -1;
        }
    }
</style>
