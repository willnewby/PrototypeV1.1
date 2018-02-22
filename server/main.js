import { Meteor } from 'meteor/meteor';
import {login} from "../imports/js/verification/LoginView";

Meteor.startup(() => {
<<<<<<< HEAD
  login;
=======
    if (login.valueOf() === true) {
        alert('Hi');
    }
>>>>>>> 76f77b43f7d3fc4c7f3e4705b8a461e143e46587
});
