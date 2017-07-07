// ==UserScript==
// @name         Padlock Data Clearer (All Broswers) Anchor Version
// @namespace    *
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*
// @match        http://*
// @include     https://*
// @include     http://*
// @grant        none
// ==/UserScript==

// BROKEN

(function() {
    'use strict';
    //if title is padlock
    if (document.title.toLowerCase().indexOf("padlock") === -1) return;
    //fi title is padlock

    //if sheets contain dashboard
    var close = true;
    var sheets = document.styleSheets;
    for (var x = 0, len = sheets.length; x < len; x++) {
        if (sheets[x].href && sheets[x].href.toLowerCase().indexOf("dashboard")!==-1) {
            close = false;
        }
    }
    if (close) return;
    //fi sheets contain dashboard

    // if pairing
    var parameters = location.search.substring(1).split("&");
    if (parameters.length === 0) return;
    var name = unescape(parameters[0].split("=")[0]).toLowerCase();
    if (name == "paired") return;
    // fi pairing

    // if reset
    var parameters = location.search.substring(1).split("&");
    if (parameters.length === 0) return;
    var name = unescape(parameters[0].split("=")[0]).toLowerCase();
    if (name == "datareset") return;
    // fi reset

    location.replace("?datareset=1");
})();