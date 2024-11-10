const express = require('express')
const cors=require('cors');
const app=express();
const port=process.env.PORT||5000;

const users=[
    {
        id:1,
        name:'sabana',
        email:'kenonaitumi@gmail.com',
    },
    {
        id:2,
        name:'sabana',
        email:'kenonaitumi@gmail.com',
    },
    {
        id:3,
        name:'sabana',
        email:'kenonaitumi@gmail.com',
    },
]

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('User management Server is running!');
})

app.post('/users',(req,res)=>{
    console.log('post api hitting!');
    console.log(req.body);
    const newUser=req.body;
    newUser.id=users.length+1;
    users.push(newUser);
    res.send(newUser)
})

app.get('/users',(req,res)=>{
    res.send(users)
})

app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})