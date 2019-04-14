(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function navTagUnderline() {
  var tags = document.getElementsByClassName("nav_link");
  // Split url string
  var urlString = window.location.href.split("/");
  // Get the HTML file name
  var fileName = "/" + urlString[urlString.length - 1];
  // Loop through tags
  for (var i = 0; i < tags.length; i++) {
    var currentTagValue = tags[i].getAttribute("href").replace(".", "");
    if (currentTagValue === fileName) {
      tags[i].classList.add("nav_link--active");
      return;
    }
  }
})();

},{}]},{},[1]);
