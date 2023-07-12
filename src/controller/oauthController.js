const requestTokenAccess = require("../src/utils/services/oauth/oauthServices");

const tokenAccess = async (req, res) => {
  try {
    const { code } = req.query;
    console.log("Controller CODE: ", code)
    const response = await requestTokenAccess(code);
    return res.status(200).json(response)
  } catch (error) {
    return error.message
  }
};

module.exports = tokenAccess; 
