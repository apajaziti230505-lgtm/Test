const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const publishDir = path.join(rootDir, "publish");

const itemsToCopy = [
  "app.js",
  "package.json",
  "controllers",
  "models",
  "routes",
  "views",
  "public",
  "database"
];

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const copyFile = (source, target) => {
  ensureDir(path.dirname(target));
  fs.copyFileSync(source, target);
};

const copyDir = (sourceDir, targetDir) => {
  ensureDir(targetDir);
  fs.readdirSync(sourceDir, { withFileTypes: true }).forEach((entry) => {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      copyDir(sourcePath, targetPath);
    } else {
      copyFile(sourcePath, targetPath);
    }
  });
};

if (fs.existsSync(publishDir)) {
  fs.rmSync(publishDir, { recursive: true, force: true });
}

ensureDir(publishDir);

itemsToCopy.forEach((item) => {
  const sourcePath = path.join(rootDir, item);
  const targetPath = path.join(publishDir, item);

  if (!fs.existsSync(sourcePath)) {
    return;
  }

  const stat = fs.statSync(sourcePath);
  if (stat.isDirectory()) {
    copyDir(sourcePath, targetPath);
  } else {
    copyFile(sourcePath, targetPath);
  }
});

const readme = `# Publish

Ky folder permban versionin e publikuar te aplikacionit MVC.

## Nisja

1. Instaloni dependencat: \`npm install\`
2. Nisni aplikacionin: \`npm start\`
`;

fs.writeFileSync(path.join(publishDir, "README.md"), readme);

console.log("Publish u krijua ne folderin /publish");
