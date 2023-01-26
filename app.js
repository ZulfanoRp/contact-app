const yargs = require("yargs");
const contacts = require("./contacts");

yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      name: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHP: {
        describe: "No Hp",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      contacts.simpanContact(argv.name, argv.email, argv.noHP);
    },
  })
  .demandCommand();

//menampilkan nama & no HP kontak
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama & no HP contact",
  handler() {
    contacts.listContact();
  },
});

//menampilkan detail sebuah kontak
yargs.command({
  command: "detail",
  describe: "Menampilkan detail kontak berdasarkan nama",
  builder: {
    name: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.detailContact(argv.name);
  },
});

//Menghapus kontak berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus kontak berdasarkan nama",
  builder: {
    name: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.name);
  },
});

yargs.parse();
