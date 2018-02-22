export let login;
<<<<<<< HEAD
login = function check(form) {
    if (form.userid.value === 'dpara' && form.pswrd.value === "123") {
        window.open('http://www.depaul.edu/')
=======
export let userId;


login = function check(form) {
    userId = form.userId.value;
    if (userId === 'dpara' && form.pswrd.value === "123") {
        window.open('http://www.depaul.edu/');
>>>>>>> 76f77b43f7d3fc4c7f3e4705b8a461e143e46587
    } else {
        alert("The username and password you entered did not match what is on file");
    }
};