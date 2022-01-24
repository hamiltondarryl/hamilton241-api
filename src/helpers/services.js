

exports.sendAll = async (data, cle, next)=> {
  var headers = {
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: "Basic " + cle,
  };

  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers,
  };

  var https = require("https");

  var req = https.request(options, function (res) {
    res.on("data", function (data) {
      console.log(JSON.parse(data));

      return next(null, JSON.parse(data));
    });
  });

  req.on("error", function (e) {
    return next({
      message: e,
    });
  });

  req.write(JSON.stringify(data));

  req.end();
}

