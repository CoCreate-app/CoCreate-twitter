(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(["./client"], function(CoCreateTwitter) {
        	return factory(CoCreateTwitter)
        });
    } else if (typeof module === 'object' && module.exports) {
      const CoCreateTwitter = require("./server.js")
      module.exports = factory(CoCreateTwitter);
    } else {
        root.returnExports = factory(root["./client.js"]);
  }
}(typeof self !== 'undefined' ? self : this, function (CoCreateTwitter) {
  return CoCreateTwitter;
}));