/*! Silk.js 2014-11-13 */
var Silk = {};

Silk.events = {}, Silk.events.openFile = function () { }, Silk.event = function (name, func) {
    switch (Silk.events[name] = func, name) {
        case "openFile":
            Silk.fileToOpen();
    }
};


Silk.fileToOpen = function () {
    name = "file", name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)", regex = new RegExp(regexS), results = regex.exec(window.location.href);
    if (null == results) return null;
    try {
        Silk.events.openFile(decodeURIComponent(results[1]));
    } catch (e) { }
    return decodeURIComponent(results[1]);
};
