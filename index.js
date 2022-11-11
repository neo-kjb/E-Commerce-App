const express = require('express');
const bodyParser = require('body-parser');
const usersRepo = require ('./Repositories/users');

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

app.post('/',async(req,res)=>{
    const {email , password, passwordConfirmation}= req.body;
    const existingEmail = await usersRepo.getOneBy({email});
    if(existingEmail){
        return res.send('Email in use');
    }

    if (password !== passwordConfirmation){
        return res.send('passwords must match')
    };
    
    res.send('account created')
})

app.listen(3000,()=>{
    console.log('listening');
})