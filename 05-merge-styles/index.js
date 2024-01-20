const fs = require('fs').promises;
const path = require('path');

async function mergeStyles() {
  const stylesDir = path.join(__dirname, 'styles');
  const bundleFile = path.join(__dirname, 'project-dist', 'bundle.css');
  const files = await fs.readdir(stylesDir);
  const cssFiles = files.filter((file) => path.extname(file) === '.css');
  const css = await Promise.all(
    cssFiles.map((file) => fs.readFile(path.join(stylesDir, file), 'utf8')),
  );
  await fs.writeFile(bundleFile, css.join('\n'));
}

mergeStyles();
