const { SKILL_NAME, HELP_REPROMPT } = require("../common/messages");
const { getFact } = require("../common");

module.exports = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === "LaunchRequest" ||
      (request.type === "IntentRequest" &&
        request.intent.name === "GetNewFactIntent")
    );
  },
  handle(handlerInput) {
    const speechOutput = getFact();
    console.log(`handle result ${speechOutput}`);
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .reprompt(HELP_REPROMPT)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .getResponse();
  }
};
