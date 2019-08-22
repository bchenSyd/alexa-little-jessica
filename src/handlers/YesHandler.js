const { HELP_REPROMPT } = require("../common/messages");
const { buildFact } = require('../common')
module.exports = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      (handlerInput.requestEnvelope.request.intent.name ===
        "AMAZON.YesIntent" ||
        handlerInput.requestEnvelope.request.intent.name === "GetNewFactIntent")
    );
  },
  handle(handlerInput) {
    const {
      requestEnvelope: {
        request: {
          intent: { name: intentName }
        }
      }
    } = handlerInput;
    console.log(`YesHandler is handling ${intentName}`);
    const speakOutput = buildFact();
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  }
};
