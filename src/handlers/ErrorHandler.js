const Alexa = require("ask-sdk");

module.exports = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
    console.log(`Error handled: ${error.message}`);
    console.log(`Error stack: ${error.stack}`);
    console.log(`request intent name: ${intentName}`);
  

    return handlerInput.responseBuilder
      .speak('debug')
      .getResponse();
  },
};
