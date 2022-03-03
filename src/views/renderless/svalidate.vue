<template>
    <div>
        <slot :validate="validate" ></slot>
         {{errMsg}}
    </div>
</template>

<script>
    export default {
        props:['rules','value'],
        data(){
            return{
                errMsg:''
            }
        },
        methods:{
            validate(){
                const validateStatus = this.rules.reduce((pre,cur) =>{
                    const check = cur && cur.test && cur.test(this.value)
                    this.errMsg = check ? '' : cur.message
                    return pre && check
                },true)
                console.log(validateStatus);
                return validateStatus
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>