const { tulisPertanyaan, simpanContact } = require("./contacts");

const main = async () => {
  const name = await tulisPertanyaan("Masukan nama anda : ");
  const email = await tulisPertanyaan("Masukan email anda : ");
  const noHP = await tulisPertanyaan("Masukan no HP anda : ");

  simpanContact(name, email, noHP);
};

main();
