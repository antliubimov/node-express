
const keys = require('../keys');

module.exports = function (email, token) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Restoring access',
        html: `
            <h1>Have you forgotten your password?</h1>
            <p>if not, ignore this email</p>
            <p>otherwise click on the link below</p>
            <p><a href="${keys.BASE_URL}/auth/password/${token}">Restoring access</a></p>
            <hr/>
            <a href="${keys.BASE_URL}">Courses shop</a>
        `
    }
}