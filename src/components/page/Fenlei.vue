<template>
<div class="fenlei">
    <el-row>
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <el-menu default-active="0" class="el-menu-vertical-demo">
                    <template v-for="item in items">
                        <el-submenu :index=item.id>
                            <template slot="title">
                            <span>{{item.menuName}}</span>
                            </template>
                            <template v-for="sub in item.sonMenuList">
                                <el-menu-item :index=sub.id>{{sub.menuName}}</el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                </el-menu>
            </div>
        </el-col>
        <el-col :span="18">
            <div  v-show="false" class="grid-content bg-purple-light">
                2222
            </div>
        </el-col>
    </el-row>
    
</div>
</template>
<script>
    export default {
        data: function(){
            return {
                items:[
                    {
                        id:'1',
                        menuName:'杯壶茶具',
                        resId:'el-icon-menu',
                        sonMenuList:[
                            {
                                id:1,
                                menuName:'水杯系列',
                                href:'fenlei'
                            },
                            {
                                id:2,
                                menuName:'水壶系列',
                                href:'fenlei'
                            },
                            {
                                id:3,
                                menuName:'酒具茶具',
                                href:'fenlei'
                            },
                            {
                                id:4,
                                menuName:'杯壶套装',
                                href:'fenlei'
                            }
                        ]
                    },
                    {
                        id:'2',
                        menuName:'文具本册',
                        resId:'el-icon-star-on',
                        sonMenuList:[
                            {
                                id:5,
                                menuName:'部门管理',
                                href:''
                            },
                            {
                                id:6,
                                menuName:'用户管理',
                                href:''
                            }
                        ]
                    },
                    {
                        id:'3',
                        menuName:'皮包箱包',
                        resId:'el-icon-setting',
                        sonMenuList:[
                            {
                                id:7,
                                menuName:'角色管理',
                                href:''
                            },
                            {
                                id:8,
                                menuName:'菜单管理',
                                href:''
                            }
                        ]
                    },
                    {
                        id:'4',
                        menuName:'家居生活',
                        resId:'el-icon-setting',
                        sonMenuList:[
                            {
                                id:9,
                                menuName:'角色管理',
                                href:''
                            },
                            {
                                id:10,
                                menuName:'菜单管理',
                                href:''
                            }
                        ]
                    },
                    {
                        id:'5',
                        menuName:'广告促销',
                        resId:'el-icon-setting',
                        sonMenuList:[
                            {
                                id:11,
                                menuName:'角色管理',
                                href:''
                            },
                            {
                                id:12,
                                menuName:'菜单管理',
                                href:''
                            }
                        ]
                    },
                    
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
    
</style>