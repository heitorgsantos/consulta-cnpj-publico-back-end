const axios = require("axios");
const DEVELOPER_API_KEY = process.env.DEVELOPER_API_KEY;

const createCartCnpj = async () => {
  const url = `https://api.hubapi.com/crm/v3/extensions/cards/1798319?hapikey=${DEVELOPER_API_KEY}`;
  const headers = {
    "Content-Type": "application/json",
  };
  const data = {
    fetch: {
      objectTypes: [
        {
          name: "companies",
          propertiesToSend: ["name"],
        },
      ],
      targetUrl: "https://40145708.hs-sites.com/pt-br/cardteste",
    },
    display: {
      properties: [
        {
          dataType: "STRING",
          name: "name",
          label: "Heitor Santos",
        },
      ],
    },
    title: "Consulta CNPJ",
    actions: {
      baseUrls: ["https://40145708.hs-sites.com/pt-br/cardteste"],
    },
  };
  const responseCard = await axios.post(url, JSON.stringify(data), { headers });
};

module.exports = createCartCnpj;
