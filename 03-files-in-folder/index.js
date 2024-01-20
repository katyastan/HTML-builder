const fs = require('fs').promises;
const path = require('path');

async function readSecretFolder() {
  const files = await fs.readdir(path.join(__dirname, 'secret-folder'));
  for (const file of files) {
    const stats = await fs.stat(path.join(__dirname, 'secret-folder', file));
    if (stats.isFile()) {
      console.log(
        `${file.replace(path.extname(file), '')} - ${path
          .extname(file)
          .replace('.', '')} - ${(stats.size / 1024).toFixed(3)}kb`,
      );
    }
  }
}

readSecretFolder();
