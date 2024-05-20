const format = require("string-template");

const locale = process.env.LOCALE || "data";

const f = (text, data = {}) => {
  const template = require("../locales/" + locale + ".json");
  return format(template[text] || text, data);
};

module.exports = f;
