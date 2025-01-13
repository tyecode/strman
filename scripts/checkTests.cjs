const fs = require("fs");
const path = require("path");

// Function to get all .ts files in a directory (excluding test files and index.ts)
const getFunctionFiles = (dirPath) => {
  const files = fs.readdirSync(dirPath);
  return files.filter(
    (file) =>
      file.endsWith(".ts") && !file.includes(".test.") && file !== "index.ts"
  );
};

// Function to check if a test file exists for a given function
const checkTestExistence = (func, testFolder) => {
  const testFile = path.join(testFolder, `${func}.test.ts`);
  if (!fs.existsSync(testFile)) {
    console.log(`Test file missing for: ${func}`);
  } else {
    console.log(`Test file found for: ${func}`);
  }
};

// Function to check all functions in the provided directories
const checkAllTests = (srcFolders, testFolder) => {
  const allFunctions = [];

  srcFolders.forEach((srcFolder) => {
    const folderPath = path.join(__dirname, "..", "src", srcFolder);
    const functions = getFunctionFiles(folderPath);
    allFunctions.push(...functions.map((file) => path.parse(file).name));
  });

  allFunctions.forEach((func) => {
    checkTestExistence(func, testFolder);
  });
};

const srcFolders = ["string"];
const testFolder = path.join(__dirname, "..", "tests");

checkAllTests(srcFolders, testFolder);
