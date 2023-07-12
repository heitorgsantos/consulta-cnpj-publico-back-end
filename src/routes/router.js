const express = require("express");
const { tokenAccess } = require("../controller/oauthController");

const router = express.Router();

router.post("/");
router.get("/oauth-callback", tokenAccess);

module.exports = { router };
