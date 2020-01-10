<template>
   <div class="login-form">
    <form v-on:submit.prevent="login">
        <h2 class="text-center">iniciar sesion</h2>       
        <div class="form-group">
             <input type="email" v-model="user.email" class="form-control" placeholder="correo" required="required">
        </div>
        <div class="form-group">
            <input type="password" v-model="user.password" class="form-control" placeholder="contraseña" required="required">
        </div>
        <div class="form-group">
            <button type="submit"  class="btn btn-primary btn-block">iniciar sesion</button>
        </div>
        <div class="clearfix">
            <label class="pull-left checkbox-inline"></label><br/>
        </div>        
    </form>
    <p class="text-center"><a href="/registro/user">crear una cuenta</a></p>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            user:{
                email:'',
                password:'',
            },
            url:"http://127.0.0.1:3333/api/v1/",
        }
    },
    methods:{
        login:function(){
            axios.post(this.url+"user/login",this.user)
            .then(response=>{
                localStorage.setItem('token',JSON.stringify(response.data.admin.token));
                this.$router.push("/");
                localStorage.setItem('email',JSON.stringify(this.user.email))
            })
            .catch(error=>{
               alert("Alerta password or email incorrect")
            })
        },
        /* logs:function(){
           var gmail=this.user.email;
           this.user.email="";
           this.user.password="";
           var userx={
               username:gmail,
               error:'Request failed with status code 500',
           }
           axios.post(this.url+"user/logs",userx)
           .then(response=>{

           }).catch(error =>{

           })
        },
        /*logsSuccess:function(){
           var gmail=this.user.email;
           this.user.email="";
           this.user.password="";
           var userx={
               username:gmail,
               error:'reuquest success',
           }
           axios.post(this.url+"user/logs",userx)
           .then(response=>{

           }).catch(error =>{

           })
        },*/
    }
}
</script>

<style >
.login-form {
		width: 500px;
    	margin: 30px auto;
	}
    .login-form form {
    	margin-bottom: 15px;
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
    .btn {        
        font-size: 15px;
        font-weight: bold;
    }
</style>
