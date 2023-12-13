import fs from "fs";

//FETCH THEME COLOR FROM GLOBAL
let QUERY = encodeURIComponent('*[_type == "global"]{redirects}');
// Compose the URL for your project's endpoint and add the query
let URLQUERY = `https://${
    import.meta.env.PROJECT_ID
  }.api.sanity.io/v2021-10-21/data/query/${
    import.meta.env.DATASET
  }?query=${QUERY}`;
// fetch the content
let data = await fetch(URLQUERY)
  .then((res) => res.json())
  .then(({ result }) => {
    return result[0].redirects;
  })
  .catch((err) => console.error(err));

let content = "\n";
for (let i = 0; i < data.length; i++) {
  content += `${data[i].from} ${data[i].to} ${
    data[i].code ? data[i].code : "301"
  }${data[i].force ? "!" : ""}`;
  content += "\n";
}

fs.appendFile("dist/_redirects", content, (err) => {
  if (err) throw err;
  console.log(`Redirections ajoutées`);
});
