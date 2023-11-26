"use strict";
const FEAbl = require("../../abl/f-e-abl.js");

class FEController {
  init(ucEnv) {
    return FEAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return FEAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return FEAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new FEController();
