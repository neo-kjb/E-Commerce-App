const express= require('express')
const usersRepo=require('../../Repositories/users');

const router = express.Router();

router.get('/signup', (req,res)=>{
    res.send(`
    <div>
    ${req.session.userId}
    <form method="post">
    <input name="email" placeholder="email"/>
    <input name="password" placeholder="password"/>
    <input name="passwordConfirmation" placeholder="password confirmation" />
    <button>sign up</button>
    </form>
    </div>
    `);
});

router.post('/signup',async(req,res)=>{
    const {email , password, passwordConfirmation}= req.body;
    const existingEmail = await usersRepo.getOneBy({email});
    if(existingEmail){
        return res.send('Email in use');
    }

    if (password !== passwordConfirmation){
        return res.send('passwords must match')
    };

    if(!password){
        return res.send('please enter a password')
    }
    
    const user = await usersRepo.create({email,password});
    req.session.userId=user.id;


    res.send('Account created');
});

router.get('/signout',(req,res)=>{
    req.session=null;
    res.send('Logged out');
});

router.get('/signin',(req,res)=>{
    res.send(`
    <div>
    <form method="post">
    <input name="email" placeholder="email"/>
    <input name="password" placeholder="password"/>
    <button>sign in</button>
    </form>
    </div>
    `)
})

router.post('/signin',async(req,res)=>{
    const {email,password}=req.body;
    const user=await usersRepo.getOneBy({email});

    if(!user){
        return res.send('Email not found')
    };

    const validPassword = await usersRepo.comparePasswords(user.password,password)

    if (!validPassword){
        return res.send('Invalid Password')
    };

    req.session.userId=user.id;

    res.send('logged in');
});

module.exports= router;