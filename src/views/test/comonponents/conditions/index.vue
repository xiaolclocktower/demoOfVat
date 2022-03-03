<template>
    <div class="conditions-wrapper">
        <div class="conditions-wrapper_item"><span>昵称</span><el-input></el-input></div>
        <div class="conditions-wrapper_item"><span>手机号</span><el-input></el-input></div>
        <div class="conditions-wrapper_item"><span>姓名</span><el-input></el-input></div>
        <div class="conditions-wrapper_item"><span>专业</span><el-input></el-input></div>
        <div class="conditions-wrapper_item"><span>职位</span><el-input></el-input></div>
        <div class="conditions-wrapper_item"><span>工作年限</span><el-input></el-input></div>

    </div>
</template>

<script>
    export default {
        
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