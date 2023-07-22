require("dotenv").config();
const querystring = require("querystring");
const { exchangeForTokens } = require("../../utils/token");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = `http://consulta-cnpj-publico-back-end.vercel.app/oauth-callback`;

const requestTokenAccess = async (code) => {
  const authCodeProof = {
    grant_type: "authorization_code",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    code: code,
  };

  const reponseToken = await exchangeForTokens(
    req.sessionID,
    querystring.stringify(authCodeProof)
  );
  return reponseToken;
};

module.exports = requestTokenAccess;
