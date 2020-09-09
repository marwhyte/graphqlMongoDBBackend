var unirest = require("unirest");
const express = require("express");
const Zillow = require("node-zillow");

const zillow = new Zillow("X1-ZWz1hzqplsyyvf_81d4x");

const router = express.Router();

router.get("/", (req, res) => {
  const parameters = {
    address: "2114 Bigelow Ave",
    citystatezip: "Seattle, WA",
    rentzestimate: false,
  };
  zillow.get("GetDeepSearchResults", parameters).then((results) => {
    console.log(results);
    return results;
  });
});

module.exports = router;
