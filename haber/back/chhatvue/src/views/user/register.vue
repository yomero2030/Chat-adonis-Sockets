<template>
    <div class="login-form">
    <form v-on:submit.prevent="register">
        <h2 class="text-center">register</h2>       
        <div class="form-group">
            <label class="pull-left checkbox-inline">user name</label><br/>
            <input type="tex" v-model="user.username" class="form-control" placeholder="User name" required="required">
        </div>
        <div class="form-group">
             <label class="pull-left checkbox-inline">email</label><br/>
            <input type="email" v-model="user.email" class="form-control" placeholder="email adress" required="required">
        </div>
        <div class="form-group">
            <label class="pull-left checkbox-inline">password</label><br/>
            <input type="password" v-model="user.password" class="form-control" placeholder="pass" required="required">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">register</button>
        </div>
        <div class="clearfix">
            <a href="/login/user" class="pull-right">Go Back</a>
        </div>        
    </form>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            user:{
                username:'',
                email:'',
                password:'',
            },
            url:"http://127.0.0.1:3333/api/v1/",
        }
    },
    methods:{
        register:function(){
          axios.post(this.url+"user/register",this.user)
          .then(response=>{
              localStorage.setItem('token',JSON.stringify(response.data.token));
              this.$router.push("/chat/user");
          })
          .catch(error=>{
          })
        },/*
        logsError:function(){
           var gmail=this.user.email;
           var userx={
               username:gmail,
               error:'Request failed with status code 500',
           }
           axios.post(this.url+"user/logs",userx)
           .then(response=>{

           }).catch(error =>{

           })
        },
        logsSuccess:function(){
           var gmail=this.user.email;
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
    	margin: 60px auto;
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