const express = require('express');
const app = express();
const debug=require('debug')('react:server');
const {Client} = require('pg');
const insert1=require('./controllers/tabledata.js');
const register=require('./controllers/garyhome.js');
const logincheck=require('./controllers/logincheck.js')
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
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended : false}));
app.post('/insert', insert1.insertdata);
app.post('/garyhome', register.garyhome);
app.get('/garyhome', register.tabledata);
app.delete('/garyhome', register.tabledel);
app.put('/garyhome', register.updatedata);
app.post('/logincheck', logincheck.userData);
app.listen(8000,()=>{
  console.log("Server is running on port 8000")
});