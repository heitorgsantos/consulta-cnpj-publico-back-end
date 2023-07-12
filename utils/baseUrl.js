const axios = require("axios");

const serverAxiosHS = axios.create({
  baseURL: "https://api.hubapi.com",
});

module.exports = { serverAxiosHS };
