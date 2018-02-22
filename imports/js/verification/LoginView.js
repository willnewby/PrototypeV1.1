// TODO: For some reason, adding this code is killing the function
// export let login;
//
// login =

import React from 'react';
import ReactDom from 'react-dom';

import '../../css/verification/LoginSheet.css';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.check = this.check.bind(this);
export let login;
login = function check(form) {
    if (form.userid.value === 'dpara' && form.pswrd.value === "123") {
        window.open('http://www.depaul.edu/')
export let userId;


login = function check(form) {
    userId = form.userId.value;
    if (userId === 'dpara' && form.pswrd.value === "123") {
        window.open('http://www.depaul.edu/');
    } else {
        alert("The username and password you entered did not match what is on file");
    }

    check(form) {
        if (form.userid.value === 'dpara' && form.pswrd.value === "123") {
            window.open('http://www.depaul.edu/')
        } else {
            alert("The username and password you entered did not match what is on file")
        }
    }

    render() {
        return <form>
            <input type="text" placeholder="username" name="userid"/>
            <input type="password" placeholder="password" name="pswrd"/>
            <input type="button" onclick={this.check} value="Login"/>
        </form>;
    }
}

ReactDom.render(LoginComponent);

// function check(form) {
//     if (form.userid.value === 'dpara' && form.pswrd.value === "123") {
//         window.open('http://www.depaul.edu/')
//     } else {
//         alert("The username and password you entered did not match what is on file")
//     }
// }