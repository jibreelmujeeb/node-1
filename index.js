const express = require('express');
const path = require('path');
const app = express();
const Port = 4000;





app.use(express.static('public'));
app.get('/home',(request,response)=>{
    let filepath = path.join(__dirname, 'public','index.html')
   response.sendFile(filepath)

})

app.use(express.static('public'));
app.get('/Signup',(request,response)=>{
    let filepath = path.join(__dirname, 'public','Signup.html')
   response.sendFile(filepath)
})


app.use(express.static('public'));
app.get('/Signin',(request,response)=>{
    let filepath = path.join(__dirname, 'public','Sign in.html')
   response.sendFile(filepath)
})



app.listen(Port,()=>{
    

})
      