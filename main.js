const method = require("./modules/method")
const boxes = require("./modules/boxes")
const returnMixedMessages = () =>
console.log(`Hi!, remember this : \n "${
  method.getElementRandom(boxes.boxOfMessages).phrase}" ~ (${
  method.getElementRandom(boxes.boxOfMessages).author})\n ${
  method.getElementRandom(boxes.boxOfAdvices)}\n ${
  method.getElementRandom(boxes.boxOfCautions)}`);
returnMixedMessages();