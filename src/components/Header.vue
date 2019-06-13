<template>
    <div>
        <el-row type="flex" justify="space-between">
            <div class="arrow" @click="handleClick">
                <i class="el-icon-back"></i>
            </div>
            <div>{{user.uname}} {{user.realname}} <span @click="handleEsc" class="btn">退出</span></div>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user:{
                realname:"菜虚鲲",
                uname:"dadada",
            }
        }
    },
    methods:{
        handleClick(){
            this.$emit("click")
        },
        handleEsc(){
            this.$axios({
                url:"http://localhost:8899/admin/account/logout",
                method:"GET",
                withCredentials: true
            }).then(res=>{
                const {status,message}=res.data;
                if(status==0){
                    this.$router.push("/login");
                    localStorage.removeItem("user");
                    this.$message.success(message);
                }
            })
        }
    },
    mounted(){
        this.user=this.$store.state.user;
    }
}
</script>

<style>
    .arrow,.btn{
        cursor: pointer;
    }
</style>
