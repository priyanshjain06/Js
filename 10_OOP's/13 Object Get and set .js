const User = {
    _email: 'h@hc.com',
    _password: "abc", // this _passwords get evaluated to a private variable in js


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);