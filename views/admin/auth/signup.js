module.exports=({req})=>{
    return `
    <div>
        ${req.session.userId}
        <form method="post">
            <input name="email" placeholder="email"/>
            <input name="password" placeholder="password"/>
            <input name="passwordConfirmation" placeholder="password confirmation" />
            <button>sign up</button>
        </form>
    </div>
    
    `;
}