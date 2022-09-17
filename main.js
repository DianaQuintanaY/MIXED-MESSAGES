const method = require("./modules/method");
const boxes = require("./modules/boxes");
const returnMixedMessages = () => {
  let returnRandomMessages = method.getElementRandom(boxes.boxOfMessages);
  return (
    `Hi!, remember this : \n "${returnRandomMessages.phrase}" ~ (${
      returnRandomMessages.author
    })\n ${method.getElementRandom(
      boxes.boxOfAdvices
    )}\n ${method.getElementRandom(boxes.boxOfCautions)}    
    `
  );
};
console.log(returnMixedMessages());
