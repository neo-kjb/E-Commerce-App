const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.send(`
    <div>
    <form method="post">
    <input name="email" placeholder="email"/>
    <input name="password" placeholder="password"/>
    <input name="passwordConfirmation" placeholder="password confirmation" />
    <button>sign up</button>
    </form>
    </div>
    `);
});

app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('account created')
})

app.listen(3000,()=>{
    console.log('listening');
})