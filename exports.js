var fs = require('fs');


module.exports = {
  "open": function (file) {
    var context = this;
    var fileName = file;

    context.async = true;

    console.log("fileName", file);

    fs.exists(fileName, function (exists) {
      if (!exists) return this.return("this file does not exist");

      fs.stat(fileName, function (err, stats) {
        if (err) return send(err);
        if (stats.isDirectory())
          context.return(new Error("Editing directories in a text editor is not currently supported"));
        fs.readFile(fileName, function (err, data) {
          if (err) return context.return(err);
          var ret = {
            state: "ready",
            content: data.toString("utf-8")
          }
          context.return(ret);
        })
      });
    });
  },
  "save": function (data, callObj, send) {
    var fs = require("fs");
    console.log(data);
    path = data.path;
    contents = data.contents;
    console.log("==========");
    // console.log(contents);
    fs.writeFile(path, contents, function (err) {
      if (err) return console.log(err);
      console.log("saved: " + path);
    });
    console.log("finished");

    // tricks silk into sending return value;
    return " ";
  }
};
