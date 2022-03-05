
export default{
    methods:{
        noNull(e){
            let  i = e.target.value.trim()
           if(!i){
                e.target.value = null
                e.target.placeholder ="输入值不能为空"
                e.target.classList.add("invalid")
           } else{
                e.target.placeholder = null
                e.target.classList.remove("invalid")
           }
        }  
    }
}