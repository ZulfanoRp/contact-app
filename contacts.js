const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// membuat folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//membuat file contact json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (name) => {
      resolve(name);
    });
  });
};

const simpanContact = (name, email, noHP) => {
  const contact = { name, email, noHP };
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log("Thank You");
  rl.close;
};

module.exports = { tulisPertanyaan, simpanContact };
