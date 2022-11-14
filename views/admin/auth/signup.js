const layout = require('../layout')

const { getErrors } = require('../../helper')

module.exports = ({ req, errors }) => {
  return layout({
    content: `       
        <div>
            Your id is: ${req.session.userId}
            <form method="post">
                <input name="email" placeholder="email"/>
                ${getErrors(errors, 'email')}
                <input name="password" placeholder="password"/>
                ${getErrors(errors, 'password')}
                <input name="passwordConfirmation" placeholder="password confirmation" />
                ${getErrors(errors, 'passwordConfirmation')}
                <button>sign up</button>
            </form>
        </div> 
           
`,
  })
}
