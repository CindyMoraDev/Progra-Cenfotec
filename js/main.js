"use strict";

import { AppManager } from "./manager/appManager.js";


window.addEventListener('load', init, false);

function init() {
    console.log('App running!');
    var appManager = new AppManager();


}