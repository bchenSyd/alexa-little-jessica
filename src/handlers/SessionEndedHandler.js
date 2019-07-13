const { getRandomGoodbye } = require("../common");
module.exports = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "SessionEndedRequest" ||
      (handlerInput.requestEnvelope.request.type === "IntentRequest" &&
        handlerInput.requestEnvelope.request.intent.name ===
          "AMAZON.StopIntent") ||
      (handlerInput.requestEnvelope.request.type === "IntentRequest" &&
        handlerInput.requestEnvelope.request.intent.name ===
          "AMAZON.CancelIntent")
    );
  },
  handle(handlerInput) {
    console.log("IN: SessionEndedHandler.handle");
    return handlerInput.responseBuilder.speak(getRandomGoodbye()).getResponse();
  }
};
