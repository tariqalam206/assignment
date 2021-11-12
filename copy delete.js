// Node.js program to demonstrate the
// fs.copyFile() method

const fs = require('fs');
 

getCurrentFilenames();
console.log("\nFile Contents of example_file:",
  fs.readFileSync("demo.txt", "utf8"));
 

fs.copyFile("demo.txt", "copied_file.txt", (err) => {
  if (err) {
    console.log("Error Found:", err);
  }
  else {
 
    
    getCurrentFilenames();
    console.log("\nFile Contents of copied_file:",
      fs.readFileSync("copied_file.txt", "utf8"));
  }
});
 

function getCurrentFilenames() {
  console.log("\nCurrent filenames:");
  fs.readdirSync(__dirname).forEach(file => {
    console.log(file);
  });
}

fs.unlink('demo.txt', (err) => {
    if (err) {
        throw err;
    }

    console.log("File is deleted.");
});