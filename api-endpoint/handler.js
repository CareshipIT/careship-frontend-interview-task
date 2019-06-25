'use strict';

const generator = require('./generator')

module.exports.random_sentences = async (event) => {
  const { n } = event.pathParameters

  return {
    statusCode: 200,
    body: JSON.stringify({
      text: generator.sentences(n)
    }, null, 2),
  }
};
