
const {Client} = require('pg')
const db1 = new Client({
    port: "5432",
    user: "postgres",
    password: "admin",
    database:"test"
  });
  db1.connect((err) => {
      if(err)
      throw err;
      else{
          console.log("database connected");
      }
  }); 
  module.exports=db1;