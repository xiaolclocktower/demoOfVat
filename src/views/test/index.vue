<template>
    <div class="test-wrapper">
        <h2>该页面仅editor可见</h2>
        <list-layout>
            <!-- 替换插槽内容 -->
             <template slot="header">
                <conditions></conditions>
             </template>
             <template slot="content">
                <!-- 使用封装的table组件 -->
                <al-table :column="formData.column" border align="center" :data="formData.list"  >
                </al-table>
             </template>
        </list-layout>
        
        
    </div>
</template>

<script>

/* 引入mixin组件 */
import { getTestList } from '@/api/test.js';

import ListLayout from "@/components/ListLayout/ListLayout.vue"
import AlTable from "@/components/lb-table/lb-table.vue"
import Conditions from "./comonponents/conditions/index.vue"
    export default {
        data(){
            return{
                formData:{
                    column:[
                        {
                            prop:'nick',
                            label:'昵称'
                        },
                         {
                            prop:'phone',
                            label:'手机号'
                        },
                         {
                            prop:'name',
                            label:'姓名'
                        },
                         {
                            prop:'subject',
                            label:'专业'
                        },
                         {
                            prop:'job',
                            label:'职位'
                        },
                         {
                            prop:'year',
                            label:'工作年限'
                        },
                         {
                            prop:'updateTime',
                            label:'录入时间'
                        },
                         {
                            prop:'actions',
                            label:'操作',
                            render(_, scope){
                                return (<el-button type="primary" round>操作</el-button>)
                            }
                        },
                    ],
                    list:[]
                }
            }
        },
        /* 注册组件 */
        components:{
            ListLayout,
            AlTable,
            Conditions
        },
        created(){
           /* 挂载时就调用getTestList方法获取数据 */
            getTestList().then(res =>{
                const{ code,data} = res
                if(Number(code) === 20000){
                    const{items } = data
                    this.formData.list = items
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
.test-wrapper{
    padding: 20px;
}

</style>