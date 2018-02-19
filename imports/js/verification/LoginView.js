export let login;
login = function check(form) {
    if (form.userid.value === 'dpara' && form.pswrd.value === "123") {
        window.open('http://www.depaul.edu/')
    } else {
        alert("The username and password you entered did not match what is on file")
    }
};