// ==UserScript==
// @name         Padlock Data Clearer (All Broswers) Classic
// @namespace    *
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://25.74.252.196/dashboard/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    // if pairing
    var parameters = location.search.substring(1).split("&");
    if (parameters.length === 0) return;
    var name = unescape(parameters[0].split("=")[0]).toLowerCase();
    if (name == "paired") return;
    // fi pairing
    var els = document.querySelectorAll("a[href='.?action=resetdata']");
    for (var i = 0, _len = els.length; i < _len; i++) {
        var el = els[i];
        el.click();
    }
    setTimeout(function () {
        var buttons = document.getElementsByTagName('button');
        console.log("starting clicking");
        for (var j = 0; j <= buttons.length; j++) {
            if (typeof buttons[j].click === "function") {
                buttons[j].click();
                console.log("clicked button");
            }
        }
    }, 1);

})();