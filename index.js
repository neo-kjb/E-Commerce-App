const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send(`
    <div>
    <form method="post">
    <input name="email" placeholder="email"/>
    <input name="password" placeholder="password"/>
    <input name="passwordConfirmation placeholder="password confirmation"/>
    <button>sign up</button>
    </form>
    </div>
    `);
});

app.post('/',(req,res)=>{
    res.send('Account created')
})


app.listen(3000,()=>{
    console.log('listening');
})