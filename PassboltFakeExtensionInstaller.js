// ==UserScript==
// @name         Passbolt Extension Link Changer (Firefox)
// @namespace    *
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*
// @match        http://*
// @includes     https://*
// @includes     http://*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    var els = document.querySelectorAll("a[href='https://www.passbolt.com/download/firefox']");
    for(var i=0, _len=els.length; i < _len; i++){
        var el = els[i];
        el.setAttribute('onclick', "location.href='https://addons.mozilla.org/firefox/downloads/latest/noscript/addon-722-latest.xpi?src=collection&collection_id=4a02c848-8be7-44ff-bc1c-f1c2d8dddf86';return false;");
    }
})();