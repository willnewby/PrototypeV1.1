export let login;
export let userId;


login = function check(form) {
    userId = form.userId.value;
    if (userId === 'dpara' && form.pswrd.value === "123") {
        window.open('http://www.depaul.edu/');
    } else {
        alert("The username and password you entered did not match what is on file");
    }
};