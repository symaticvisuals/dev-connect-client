const fetch = require("node-fetch");
exports.handler = async function () {
  const url = process.env.ASTRA_GRAPHQL_ENDPOINT;
  const query = `query getAllRoles {
         roles(value: { label: "role" }) {
   values {
     value
  }
 }
    }`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-cassandra-token": process.env.ASTRA_TOKEN,
    },
    body: JSON.stringify({ query }),
  });
  try {
    const reponseBody = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(reponseBody),
    };
  } catch (e) {
      console.log(e)
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
