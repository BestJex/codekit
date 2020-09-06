const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const langList = ['zhCN', 'en', 'ja'];
const pkgRootPath = path.join('src', 'packages');
const outputRootPath = path.join('src', 'data');
const fsConfig = { encoding: 'utf-8' };

if (fs.existsSync(outputRootPath)) {
  fs.rmdirSync(outputRootPath, { recursive: true });
}
fs.mkdirSync(outputRootPath);

let searchIndex = [];
langList.forEach((lang, langIndex) => {
  searchIndex = [];
  fs.readdirSync(pkgRootPath).forEach(pkgKey => {
    if (fs.lstatSync(path.join(pkgRootPath, pkgKey)).isDirectory()) {
      const pkg = { key: pkgKey };

      // Load package YAML config
      const config = fs.readFileSync(path.join(pkgRootPath, pkgKey, '_config.yaml'), fsConfig);
      const pkgConfig = yaml.load(config);
      pkg.name = pkgConfig.name;
      pkg.reference = pkgConfig.references.description.url;

      // Load package description
      const content = fs.readFileSync(path.join(pkgRootPath, pkgKey, `${lang}.md`), fsConfig);
      pkg.description = content.split('# ')[0].trim();

      // Add package to search index
      searchIndex.push(pkg);
    }
  });

  // Export the search index
  fs.writeFileSync(
    path.join(outputRootPath, `search.${lang}.json`),
    JSON.stringify({ data: searchIndex }),
    fsConfig
  );

  // Export the packages catalog
  if (langIndex === 0) {
    const packageList = searchIndex.map(pkg => pkg.key);
    fs.writeFileSync(
      path.join(outputRootPath, 'packages.json'),
      JSON.stringify({ data: packageList }),
      fsConfig
    );
  }
});
