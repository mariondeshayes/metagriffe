import fs from "fs";
import 'dotenv/config'

let QUERY, URLQUERY;

//FETCH MENU ORGANISATION AND LOGO FROM GLOBAL
QUERY = encodeURIComponent(`
*[_type == "global"]{
  'logo': logo.asset->url,
  'favSVG': favSVG.asset->url,
  'favmask': favmask.asset->url,
  'favtouch': favtouch.asset->url,
  'fav16': fav16.asset->url,
  'fav32': fav32.asset->url,
  'favico': favico.asset->url,
  "accentColor": accent1Color.hex,
  "textColor": textColor.hex,
  "bgColor": bgColor.hex,
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

try {
  if (!fs.existsSync("dist/favicon")) {
    fs.mkdirSync("dist/favicon");
  }
} catch (err) {
  console.error(err);
}

if (data.favSVG) {
  //fetch the content of the favicon
  let tmp = await fetch(`${data.favSVG}?dl=`)
    .then((res) => res.text())
    .then((text) => {
      return text;
    })
    .catch((err) => console.error(err));
  fs.appendFile("dist/favicon/favicon.svg", tmp, (err) => {
    if (err) throw err;
    console.log(`Favicon SVG ajouté`);
  });
}
//USE LOGO INSTEAD
else {
  let tmp = await fetch(`${data.logo}?dl=`)
    .then((res) => res.text())
    .then((text) => {
      return text;
    })
    .catch((err) => console.error(err));
  fs.appendFile("dist/favicon/favicon.svg", tmp, (err) => {
    if (err) throw err;
    console.log(`LOGO utilisé comme favicon`);
  });
}
if (data.favmask) {
  //fetch the content of the favicon
  let tmp = await fetch(`${data.favmask}?dl=`)
    .then((res) => res.text())
    .then((text) => {
      return text;
    })
    .catch((err) => console.error(err));
  fs.appendFile("dist/favicon/mask-icon.svg", tmp, (err) => {
    if (err) throw err;
    console.log(`Favicon Safari ajouté`);
  });
}
if (data.favtouch) {
  //fetch the content of the favicon
  let tmp = await fetch(`${data.favtouch}?dl=`)
    .then((res) => res.text())
    .then((text) => {
      return text;
    })
    .catch((err) => console.error(err));
  fs.appendFile("dist/favicon/apple-touch-icon.png", tmp, (err) => {
    if (err) throw err;
    console.log(`Favicon iOS ajouté`);
  });
}
if (data.fav16) {
  //fetch the content of the favicon
  let tmp = await fetch(`${data.fav16}?dl=`)
    .then((res) => res.text())
    .then((text) => {
      return text;
    })
    .catch((err) => console.error(err));
  fs.appendFile("dist/favicon/favicon-16x16.png", tmp, (err) => {
    if (err) throw err;
    console.log(`Favicon 16x16 ajouté`);
  });
}
if (data.fav32) {
  //fetch the content of the favicon
  let tmp = await fetch(`${data.fav32}?dl=`)
    .then((res) => res.text())
    .then((text) => {
      return text;
    })
    .catch((err) => console.error(err));
  fs.appendFile("dist/favicon/favicon-32x32.png", tmp, (err) => {
    if (err) throw err;
    console.log(`Favicon 32x32 ajouté`);
  });
}
if (data.favchrome) {
  //fetch the content of the favicon
  let tmp = await fetch(`${data.favchrome}?dl=`)
    .then((res) => res.text())
    .then((text) => {
      return text;
    })
    .catch((err) => console.error(err));
  fs.appendFile("dist/favicon/android-chrome-512x512.png", tmp, (err) => {
    if (err) throw err;
    console.log(`Favicon chrome ajouté`);
  });
}

//GENERATE THE MANIFEST
let name = process.env.PUBLIC_SITENAME;
let manifest = {};
manifest.name = name;
manifest.short_name = name;
manifest.icons = [
  {
    "src": "/favicon/android-chrome-512x512.png",
    "sizes": "512x512",
    "type": "image/png"
  }
],
manifest.theme_color = data.accentColor;
manifest.background_color = data.bgColor;
manifest.display = "standalone";

fs.appendFile("dist/favicon/site.webmanifest", JSON.stringify(manifest,null,2), (err) => {
  if (err) throw err;
  console.log(`Manifest ajouté`);
});


