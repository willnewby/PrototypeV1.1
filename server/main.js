import { Meteor } from 'meteor/meteor';
import {login} from "../imports/js/verification/LoginView";

Meteor.startup(() => {
  login;
    if (login.valueOf() === true) {
        alert('Hi');
    }
});
