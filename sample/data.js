"use strict";
exports.__esModule = true;
exports.books = (function () {
    var bookStore = [];
    var removeZeros = function (v) { return v.toFixed(0); };
    for (var i = 1; i < 10; i++) {
        bookStore.push({
            id: "author-" + removeZeros(Math.random() * Math.floor(2000)),
            quantity: removeZeros(Math.random() * Math.floor(2018))
        });
    }
    return bookStore;
})();
