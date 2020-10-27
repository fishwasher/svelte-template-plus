// process front page template, add 'version' modifier to client libs' URLs,
// save it as '/public/index.html' app's landing page

process.on("unhandledRejection", (err) => {
  console.log(err);
  throw err;
});

const path = require("path"),
  fs = require("fs");

const dirProj = fs.realpathSync(process.cwd()),
  absPath = (relPath) => path.resolve(dirProj, relPath);

const makeVersion = () => {
  const helloCovid = new Date(2020, 2, 13, 12); // arbitrary reference date
  const delta = Date.now() - helloCovid.getTime();
  return delta.toString(32);
};

updateHtml = () => {
  const fpTpl = absPath("template.html"),
    fpHtml = absPath("public/index.html");
  let html, ver = makeVersion();
  try {
    html = fs.readFileSync(fpTpl).toString();
    html = html.replace(/_VERSION_/g, ver);
    fs.writeFileSync(fpHtml, html);
    console.log(`New version generated: '${ver}'`);
  } catch(x){
    console.error(x);
  }
}

updateHtml();
