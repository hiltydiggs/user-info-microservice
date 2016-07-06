var express = require("express"),
    acceptLanguage = require("accept-language"),
    useragent = require("useragent"),
    router = express.Router();

router.get("/", function(req, res) {
  var ip = req.headers["X-Forwarded-For"] || req.headers["x-forwarded-for"] || req.client.remoteAddress,
      langString = req.headers["accept-language"],
      language = acceptLanguage.parse(langString),
      agent = useragent.parse(req.headers["user-agent"]),
      system = agent.os.toString(),
      browser = agent.toAgent();

  var returnObj = {
    "ip-address": ip,
    "language": language[0].value,
    "operating-system": system,
    "browser": browser
  }
  res.send(returnObj);
});

module.exports = router;
