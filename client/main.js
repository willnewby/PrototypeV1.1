import { React } from 'react';
import { Meteor } from 'meteor/meteor';
import {render} from 'react-dom';

import './../imports/html/verification/Login.html';

import Prototype from  "../imports/js/app/Prototype.js";

Meteor.startup(() => {
    // render(<Prototype />,
    //     document.getElementById('render-target'));
});