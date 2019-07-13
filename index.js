/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require("ask-sdk");

const GetNewFactHandler = require('./src/handlers/GetNewFactHandler');
const YesHandler = require('./src/handlers/YesHandler');

const SessionEndedRequestHandler = require('./src/handlers/SessionEndedRequestHandler');
const SessionEndedHandler = require('./src/handlers/SessionEndedHandler');

const HelpHandler = require('./src/handlers/HelpHandler');
const ErrorHandler = require('./src/handlers/ErrorHandler');

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    YesHandler,
    SessionEndedHandler,
    SessionEndedRequestHandler,
    HelpHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
