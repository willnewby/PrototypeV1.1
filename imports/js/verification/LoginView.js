// TODO: For some reason, adding this code is killing the function
// export let login;
//
// login =

import React from 'react';
import ReactDom from 'react-dom';

function check(form) {
    if (form.userid.value === 'dpara' && form.pswrd.value === "123") {
        window.open('http://www.depaul.edu/')
    } else {
        alert("The username and password you entered did not match what is on file")
    }
};