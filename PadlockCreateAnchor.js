// ==UserScript==
// @name         Padlock Data Clearer (All Broswers) Anchor Version
// @namespace    *
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://25.74.252.196/dashboard/
// @grant        none
// ==/UserScript==

// BROKEN

(function() {
    'use strict';
    var ancho = document.createElement('a');
    ancho.setAttribute('href',"?datareset=1");
    document.getElementsByClassName("paired-devices")[0].appendChild(ancho);
    ancho.click();
})();