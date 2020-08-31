const fs = require('fs');
const path = require('path');

const langList = ['zhCN', 'en', 'ja'];
const pkgRootPath = path.join('src', 'packages');
const outputRootPath = path.join('src', 'data');

if (fs.existsSync(outputRootPath)) {
  fs.rmdirSync(outputRootPath, { recursive: true });
}
fs.mkdirSync(outputRootPath);

langList.forEach(lang => {
  const descObj = { data: [] };
  fs.readdirSync(pkgRootPath).forEach(pkg => {
    if (pkg !== 'index.js') {
      const content = fs.readFileSync(path.join(pkgRootPath, pkg, `${lang}.md`), {
        encoding: 'utf-8'
      });
      const description = content.split('# ')[0].trim();
      descObj.data.push({ key: pkg, description });
    }
  });

  fs.writeFileSync(path.join(outputRootPath, `search.${lang}.json`), JSON.stringify(descObj), {
    encoding: 'utf-8'
  });
});
