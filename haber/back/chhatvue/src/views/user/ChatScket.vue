<template>
    <div id= "chat">
        <h1>chat Room</h1>
        
       
        <input type="text" v-model="inputMessage"/>
        <button @click="sendMessage(inputMessage)"> Enviar</button>
        <hr/>
        <ul>
        <li v-bind:key="m" v-for="m in messages  ">{{m}}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import Ws from "@adonisjs/websocket-client";
const ws = Ws("ws://127.0.0.1:3333");

export default {
    name: "chat",
    components:{ },
    async created(){
     this.initializeChatWs()
    },
data: () =>({
    chat : null,
    inputMessage : " ",
    messages: [""],
    //url: 'http://127.0.0.1:3333/api/v1',
    //username: '',
    // email:'',
        
}),


methods :{ 
    initializeChatWs : async function(){
    ws.connect();
    this.chat = ws.subscribe('chat')

    let chat = this.chat
    chat.on('ready', () => {
        this.sendMessage("Hola")
    })

    chat.on('message',(event)=>{
        this.receiveMessage(event)
    })

    },
    sendMessage : async function(message){
        this.chat.emit('message',message)
    },
    receiveMessage : async function(msg){
        this.messages.push(msg)
    },
/*
    sendMessage2 :async function(){
    var textEncrypted = this.CryptoJS.AES.encrypt(JSON.stringify(this.messages),this.messages).toString();
    var bytes  = this.CryptoJS.AES.decrypt(textEncrypted.toString(),this.messages);
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    let encrypted = this.$aes.encrypt(this.messages);
    let decrypted = this.$aes.decrypt(encrypted);
    var perro =CryptoJS.SHA512("Message").toString();
    var user={
        message:encrypted,
        email:this.email,
        name:this.userName,
    }   
    this.messages="";
    axios.post(this.url+"user/message",user)
    .then(reponse =>{
        this.seeMessages();
    })
    .catch(e =>{s
    })
    },*/

}

};
</script>