const layout = require('../layout')

const { getErrors } = require('../../helper')

module.exports = ({ errors }) => {
  return layout({
    content: `
            <div>
                <form method="post">
                    <input name="email" placeholder="email"/>
                    ${getErrors(errors, 'email')}
                    <input name="password" placeholder="password"/>
                    ${getErrors(errors, 'password')}
                    <button>sign in</button>
                </form>
            </div>
        `,
  })
}
