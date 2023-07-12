const axios = require("axios");
const { serverAxiosHS } = require("./baseUrl");

const exchangeForTokens = async (userId, exchangeProof) => {
  //   console.log("Log dos parametros dentro da função: ", userId, exchangeProof);
  try {
    const responseBodyToken = await serverAxiosHS
      .post("/oauth/v1/token", exchangeProof)
      .then((response) => {
        const { access_token } = response.data;
        return access_token;
      });

      console.log("Token de Acesso: ", responseBodyToken)
    // const responseBody = await axios
    //   .post("https://api.hubapi.com/oauth/v1/token", exchangeProof)
    //   .then((response) => {
    //     // console.log("Log do response", response.data);
    //     return response.data;
    //   });

    
    // refreshTokenStore[userId] = tokens.refresh_token;
    //   accessTokenCache.set(userId, tokens.access_token, Math.round(tokens.expires_in * 0.75));

    return responseBodyToken
  } catch (e) {
    return e.response.data;
  }
};

module.exports = { exchangeForTokens };
