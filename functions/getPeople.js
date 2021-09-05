const fetch = require("node-fetch");
exports.handler = async function (event) {
    const body = JSON.parse(event.body);
    const role = body.role;
  const url = process.env.ASTRA_GRAPHQL_ENDPOINT;
  const query = `query {
  users_by_roles(value: { role: ${JSON.stringify(role)} }, orderBy: [username_ASC]){values{
    first_name,
    last_name,
    emailID,
    profile_pic
  }}
}
`;

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
    console.log(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
