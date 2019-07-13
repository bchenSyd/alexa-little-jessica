const girls = ["joanna", "jennifer", "jessica"];
const qualifiers = [
  "good",
  "bad",
  "very naughty",
  "beautiful",
  "chatty",
  "very very very very naughty",
  "really really smart"
];

const buildFact = () => {
  const girl = girls[Math.floor(Math.random() * girls.length)];
  const qualifer = qualifiers[Math.floor(Math.random() * qualifiers.length)];
  return `${girl} is a  <emphasis level="strong">${qualifer}</emphasis>  girl`;
};

function getRandomGoodbye() {
  const goodbyes = [
    "OK.  Goodbye!",
    "Have a great day!",
    "Come back again soon!"
  ];
  return goodbyes[Math.floor(Math.random() * goodbyes.length)];
}

module.exports = {
  buildFact,
  getRandomGoodbye
};
