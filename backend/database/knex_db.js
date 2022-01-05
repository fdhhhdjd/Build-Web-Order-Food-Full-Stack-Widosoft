const KNEX = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "order_food",
    port: 3306,
  },
  pool: { min: 0, max: 7 },
});

module.exports = KNEX;
