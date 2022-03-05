<template>
    <div>
        <h2>该页面仅admin可见</h2>
        <s-validate #default="{validate }" :rules = "rules" :value="value">
            <el-input v-model="value" @blur="validate" />
        </s-validate>
    </div>
</template>

<script>
 import SValidate from "./svalidate.vue"
    export default {
       components:{
           SValidate
       },
       data(){
           return{
               value:'',
               rules:[
                   {
                       test:function(value){
                           return /\d+/.test(value)
                       },
                       message:"请输入一个数字"
                   }
               ]
           }
       }
    }
</script>

<style lang="scss" scoped>

</style>