class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // set email(value){
    //     this.email = value // this will throw error as stack max heap is filled coz there is race between setter and constructor both are trying to set the values of email
    // }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const pj = new User("h@hitesh.ai", "abc")
console.log(pj.email);
console.log(pj._email);
// console.log(pj.email());  // gives error