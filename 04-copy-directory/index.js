const fs = require('fs').promises;
const path = require('path');

async function copyFolder() {
  const sourceDir = path.join(__dirname, 'files');
  const destinationDir = path.join(__dirname, 'files-copy');

  const files = await fs.readdir(sourceDir);
  await fs.mkdir(destinationDir, { recursive: true });
  for (const file of files) {
    const sourceFile = path.join(sourceDir, file);
    const destinationFile = path.join(destinationDir, file);
    await fs.copyFile(sourceFile, destinationFile);
    console.log(`Copied: ${file}`);
  }
}

copyFolder();
