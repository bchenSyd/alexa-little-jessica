
module.exports = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === "IntentRequest" &&
      request.intent.name === "AMAZON.FallbackIntent"
  },

  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(`sorry, I'm not sure what you mean`)
      .getResponse();
  },
};
