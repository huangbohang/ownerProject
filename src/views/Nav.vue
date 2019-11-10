<template>
    <el-scrollbar class="tac">
        <el-menu
                default-active="2"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <template v-for="(item,index) in data">
                <el-submenu
                        v-if="item.children && item.children.length"
                        :key="index"
                        :index="index.toString()">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.title}}</span>
                    </template>
                        <el-menu-item
                                v-for="(tar,value) in item.children"
                                :key="index+'_'+value"
                                :index="index+'_'+value">
                            <template slot="title">
                                <i :class="tar.icon"></i>
                                <span>{{tar.title}}</span>
                            </template>
                        </el-menu-item>
                </el-submenu>
                <el-menu-item v-else :index="index.toString()" :key="index">
                    <i :class="item.icon"></i>
                    <span>{{item.title}}</span>
                </el-menu-item>
            </template>

        </el-menu>
    </el-scrollbar>
</template>

<script>
    export default {
        name: 'Nav',
        data() {
            return {
                data: [
                    {
                        title: 'Home',
                        icon: 'el-icon-s-home',
                        route: ''
                    },
                    {
                        title: '个人制作',
                        icon: 'el-icon-bank-card',
                        route: '',
                        children: [
                            {
                                title: 'THREE.JS',
                                icon: 'el-icon-magic-stick',
                                route: ''
                            },
                            {
                                title: '疑难杂症',
                                icon: 'el-icon-coordinate',
                                route: ''
                            }
                        ]
                    },
                    {
                        title: '心情语录',
                        icon: 'el-icon-chat-square'
                    },
                    {
                        title: '前端工具及收集',
                        icon: 'el-icon-link'
                    },
                ]
            }
        },
        props: {},
        mounted() {
        },
        methods: {
            handleOpen(key, keyPath) {
                // eslint-disable-next-line no-console
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                // eslint-disable-next-line no-console
                console.log(key, keyPath);
            }
        }
    }
</script>
<style scoped lang="less">
    .tac {
        height: 100%;
        background-color: rgb(84, 92, 100);
        /deep/ .el-menu{
            border-right: unset;
        }
    }
</style>
