<template>
    <div class="conditions-wrapper">
        <div class="conditions-wrapper_item"><span>昵称</span><el-input v-model="nick" @blur="blur"></el-input></div>
        <div class="conditions-wrapper_item"><span>手机号</span><el-input v-model="phone" @blur="blur"></el-input></div>
        <div class="conditions-wrapper_item"><span>姓名</span><el-input v-model="name" @blur="blur"></el-input></div>
        <div class="conditions-wrapper_item"><span>专业</span><el-input v-model="subject" @blur="blur"></el-input></div>
        <div class="conditions-wrapper_item"><span>职位</span><el-input v-model="job" @blur="blur"></el-input></div>
        <div class="conditions-wrapper_item"><span>工作年限</span><el-input v-model="year" @blur="blur"></el-input></div>

    </div>
</template>

<script>
import noNull from '../mixin/mixin'
    export default {
        /* 使用mixins组件进行输入是否为空的判断 */
        mixins:[noNull],
        methods:{
            blur(e){
                this.noNull(e)
            },
        },
        data(){
            return{
                nick:'',
                phone:'',
                name:'',
                subject:'',
                job:'',
                year:''
            }
        }
    }
</script>

<style lang="scss" scoped>
.conditions-wrapper{
    display: flex;
    align-items: center;
    &_item{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        span{
            display: inline-block;
            width: 70px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: #DCDFE6;
            border-radius: 4px
        }
        .el-input{ 
            width: 200px;
        }
    }
}
</style>
<style >
/* scoped外样式 */
     .el-input__inner.invalid{
           border:2px #F56C6C solid ;
       }
/* 改变placeholder字体颜色 */
       input.el-input__inner.invalid:-ms-input-placeholder,
       textarea:-ms-input-placeholder {
            color: #F56C6C;
        }

        input.el-input__inner.invalid::-webkit-input-placeholder,
        textarea::-webkit-input-placeholder {
            color: #F56C6C;
        }
</style>