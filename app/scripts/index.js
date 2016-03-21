'use strict';
document.addEventListener('DOMContentLoaded', function() {
  var h1 = document.getElementsByTagName('h1');
  if (h1.length > 0) {
    h1[0].innerText = h1[0].innerText + ' \'Allo';
  }
  
    var webview = document.getElementById("foo");
    var indicator = document.querySelector(".indicator");

    var loadstart = function() {
        indicator.innerText = "loading...";
    }
    var loadstop = function() {
        indicator.innerText = "";
    }
    webview.addEventListener("loadstart", loadstart);
    webview.addEventListener("loadstop", loadstop);
}, false);
