import MySQL from "mysql";

const connection = MySQL.createConnection({
  host: "localhost",
  user: "mygame",
  password: "mygame@2020",
  database: "mygame"
});

connection.query("SELECT * from mygame", function(
  error: Error,
  results: Array<any>,
  fields: any
) {
  if (error) throw error;
  console.log(results[0].solution);
});

connection.end();
