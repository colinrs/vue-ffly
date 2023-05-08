<template>
    <el-menu 
    default-active="1-4-1"
    class="el-menu-vertical-demo" 
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
        <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name">
            <template>
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{item.label}}</span>
            </template>
        </el-menu-item>
        <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
            <el-submenu v-for="item in hasChildren" :key="item.name">
                <template slot="title">
                    <i :class="`el-icon-${item.icon}`"></i>
                    <span>{{item.label}}</span>
                </template>
            <el-menu-item-group v-for="children in item.children" :key="children.name">
              <template slot="title">{{children.label}}</template>
              <el-menu-item :index="children.name">{{children.name}}</el-menu-item>
            </el-menu-item-group>
           </el-submenu>
    </el-menu>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
    height: 100vh;
}
</style>
<script>
const CommonAside = {
    data () {
        return {
            isCollapse: false,
            menus: [
                {
                    path: '/',
                    name: 'home',
                    label: '首页',
                    icon: 's-home',
                    url: 'Home/Home'
                },
                {
                    path: '/mall',
                    name: 'mall',
                    label: '商品管理',
                    icon: 'video-play',
                    url: 'MallManage/MallManage'
                },
                {
                    path: '/user',
                    name: 'user',
                    label: '用户管理',
                    icon: 'user',
                    url: 'UserManage/UserManage'
                },
                {
                    label: '其他',
                    icon: 'location',
                    children: [
                        {
                            path: '/page1',
                            name: 'page1',
                            label: '页面1',
                            icon: 'setting',
                            url: 'Other/PageOne'
                        },
                        {
                            path: '/page2',
                            name: 'page2',
                            label: '页面2',
                            icon: 'setting',
                            url: 'Other/PageTwo'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleOpen (key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose (key, keyPath) {
            console.log(key, keyPath)
        }
    },
    computed: {
        noChildren () {
            return this.menus.filter(item => !item.children)
        },
        hasChildren () {
            return this.menus.filter(item => item.children)
        }

    }
}
export default CommonAside
</script>
