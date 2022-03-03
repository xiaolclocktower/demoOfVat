<template>
    <div class="test-wrapper">
        <list-layout>
            <!-- 替换插槽内容 -->
             <template slot="header">
                 1111
             </template>
             <template slot="content">
                 2222
             </template>
        </list-layout>
        <!-- 使用封装的table组件 -->
        <al-table :column="formData.column" border align="center" :data="formData.list"  >
        </al-table>
        
    </div>
</template>

<script>
import { getTestList } from '@/api/test.js';
/* 引入组件 */
import ListLayout from "@/components/ListLayout/ListLayout.vue"
import  AlTable from "@/components/lb-table/lb-table.vue"
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
                            label:'操作'
                        },
                    ],
                    list:[]
                }
            }
        },
        /* 注册组件 */
        components:{
            ListLayout,
            AlTable
        },
        created(){
            /* 挂载时就调用getTestList方法获取数据 */
            getTestList().then(res =>{
                const{ code,data} = res
                if(Number(code) === 20000){
                    const{items ,total} = data
                    this.formData.list = items
                    console.log(this.formData.list)
                    console.log(aaaa)
                    
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
.test-wrapper{
    padding: 20px;
}
</style>