'use strict';

const generator = require('./generator')

module.exports.random_sentences = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      text: generator.sentences(5)
    }, null, 2),
  }
};
