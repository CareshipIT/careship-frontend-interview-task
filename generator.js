var nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"]
var verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"]
var adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"]
var adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"]
var preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"]
var conjunctions = ["because some", "which became", "which was", "who did"]

function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);
  var rand5 = Math.floor(Math.random() * 10);
  var rand6 = Math.floor(Math.random() * 10);
  var randConj = Math.floor(Math.random() * 4);

  var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " "
    + adverbs[rand3] + " " + verbs[rand4] + " " + conjunctions[randConj] + " "
    + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " "
    + preposition[rand1] + " " + adjectives[rand2] + " " + nouns[rand5]
    + " " + conjunctions[randConj] + " "
    + adjectives[rand3] + "," + adjectives[rand4] + " " + nouns[rand6] + ".";

  return content;
}

exports.sentences = function (count) {
  let output = sentence();

  for (var i = 1; i < count; i++) {
      output += sentence();
  }

  return output;
}
