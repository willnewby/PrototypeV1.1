import { Component } from 'react';
import Profile from '../profiles/ProfilePageView';
import {loadedProfile} from "../profiles/ProfilePageView";

export default class Prototype extends Component {
    static getProfile() {
        return (alert('Profile'));
    }

    renderProfile() {
        return this.getProfile();
    }

    render() {
        this.renderProfile();
    }
}