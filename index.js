/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require("ask-sdk");

const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === "LaunchRequest" ||
      (request.type === "IntentRequest" &&
        request.intent.name === "GetNewFactIntent")
    );
  },
  handle(handlerInput) {
    const girls = ["joanna", "jennifer", "jessica"];
    const qualifiers = [
      "good",
      "bad",
      "very naughty",
      "beautiful",
      "chatty",
      "very very very very naughty",
      "hard working",
    ];
    const girl = girls[Math.floor(Math.random() * girl.length)];
    const qualifer = qualifiers[Math.floor(Math.random() * qualifiers.length)];
    const speechOutput = `${girl} is a ${qualifer} girl`;

    console.log(`handle result ${speechOutput}`);
    return handlerInput.responseBuilder
      .speak(`<amazon:effect name="whispered">${speechOutput}</amazon:effect>`)
      .withSimpleCard(SKILL_NAME, speechOutput)
      .getResponse();
  }
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === "IntentRequest" &&
      request.intent.name === "AMAZON.HelpIntent"
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  }
};

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return (
      request.type === "IntentRequest" &&
      (request.intent.name === "AMAZON.CancelIntent" ||
        request.intent.name === "AMAZON.StopIntent")
    );
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder.speak(STOP_MESSAGE).getResponse();
  }
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === "SessionEndedRequest";
  },
  handle(handlerInput) {
    console.log(
      `Session ended with reason: ${
        handlerInput.requestEnvelope.request.reason
      }`
    );

    return handlerInput.responseBuilder.getResponse();
  }
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak("Sorry, an error occurred.")
      .reprompt("Sorry, an error occurred.")
      .getResponse();
  }
};

const SKILL_NAME = "Little Jessica";
const HELP_MESSAGE =
  "You can say tell me a space fact, or, you can say exit... What can I help you with?";
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Goodbye!";

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
