import fs from "fs";
import 'dotenv/config'

let QUERY, URLQUERY;

//FETCH MENU ORGANISATION AND LOGO FROM GLOBAL
QUERY = encodeURIComponent(`
*[_type == "global"]{
  'logo': logo.asset->url,
}`);
// Compose the URL for your project's endpoint and add the query
// ⚠️ Don't forget to change PROJECT_ID & DATASET from .env
URLQUERY = `https://${
  process.env.PROJECT_ID
}.api.sanity.io/v2021-10-21/data/query/${
  process.env.DATASET
}?query=${QUERY}`;
// fetch the content
// Global is a singleton, so you return the first element of the array (result[0])
let data = await fetch(URLQUERY)
  .then((res) => res.json())
  .then(({ result }) => {
    return result[0];
  })
  .catch((err) => console.error(err));

if (data.logo) {
  //fetch the content of the favicon
  let tmp = await fetch(`${data.logo}?dl=`)
    .then((res) => res.text())
    .then((text) => {
      return text;
    })
    .catch((err) => console.error(err));
  data = tmp;
}

fs.appendFile("dist/favicon.svg", data, (err) => {
  if (err) throw err;
  console.log(`Favicon ajouté`);
});


