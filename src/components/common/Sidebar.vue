<template>
<div class="sidebar">
    <el-menu default-active="0" class="el-menu-vertical-demo" background-color="#2E363F" text-color="#ffffff" unique-opened router>
        <template v-for="item in items">
            <el-submenu :index=item.id>
                <template slot="title">
                <i :class=item.resId></i>
                <span>{{item.menuName}}</span>
                </template>
                <template v-for="sub in item.sonMenuList">
                    <el-menu-item :index=sub.href>{{sub.menuName}}</el-menu-item>
                </template>
            </el-submenu>
        </template>
    </el-menu>
</div>
</template>
<script>
    export default {
        data: function(){
            return {
                items:[
                    {
                        id:'1',
                        menuName:'分类管理',
                        resId:'el-icon-menu',
                        sonMenuList:[
                            {
                                id:1,
                                menuName:'分类管理',
                                href:'fenlei'
                            }
                        ]
                    },
                    {
                        id:'2',
                        menuName:'用户管理',
                        resId:'el-icon-star-on',
                        sonMenuList:[
                            {
                                id:1,
                                menuName:'部门管理',
                                href:''
                            },
                            {
                                id:2,
                                menuName:'用户管理',
                                href:''
                            }
                        ]
                    },
                    {
                        id:'3',
                        menuName:'系统管理',
                        resId:'el-icon-setting',
                        sonMenuList:[
                            {
                                id:1,
                                menuName:'角色管理',
                                href:''
                            },
                            {
                                id:2,
                                menuName:'菜单管理',
                                href:''
                            }
                        ]
                    }
                    
                ]
            }
        }
        // ,
        // mounted () {
        //     this.getAuthMenu();
        // },
        // methods: {
        //     handleOpen(key, keyPath) {
        //         console.log(key, keyPath);
        //     },
        //     handleClose(key, keyPath) {
        //         console.log(key, keyPath);
        //     },
        //     getAuthMenu(){
        //         var postData = new URLSearchParams()
        //         postData.append('id', '201503151109176271006173')
        //         this.$axios.post('/api/sylp/getAuthMenu', postData,{headers:{'Access-Control-Allow-Orgin':'*'}})
        //         .then(function (response) {
        //             console.log(this.items);
        //             this.items=response.data;
        //         }.bind(this))
        //         .catch(function (response) {
        //             console.log(response);
        //         });
        //     }
        //}
    }
</script>

<style>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>