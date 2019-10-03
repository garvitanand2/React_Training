const db1 = require('../controllers/db.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.garyhome = (req, res) => {


    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const phone = req.body.phone
    console.log(firstname + lastname + email + phone)
    const insertData = {
        text: `INSERT INTO gary(Firstname,Lastname,emailid,Phone) values($1,$2,$3,$4)`,
        values: [firstname, lastname, email, phone]
    }
    db1.query(insertData, (res, err) => {
        if (err) {
            console.log(err.stack)
        }
        else {
          // res.send(200)
        }
    })

    db1.query('SELECT * FROM gary', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })

}

exports.tabledata = (req, res) => {
    db1.query('SELECT * FROM gary', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })

}


exports.tabledel = (req, res) => {

    let id = req.body.id
    db1.query('Delete FROM gary Where id = ' + id, (error, results) => {
        if (error) {
            throw error
        }
    })
    db1.query('SELECT * FROM gary', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })

}



exports.updatedata = (req, res) => {

    const fname = req.body.firstname
    const lname = req.body.lastname
    const email = req.body.email
    const phone = req.body.phone
    let   id = req.body.id

    console.log(fname) 
    
    console.log(lname) 
    
    console.log(email) 
    
    console.log(phone)
    
    console.log(id)
   

    let insertData1 = {
        text: `UPDATE gary SET Firstname=$1,Lastname=$2,emailid=$3,Phone=$4 WHERE id = $5 `,
        values: [fname, lname, email, phone, id]
      }
      db1.query(insertData1, (res, err) => {
        if (err) {
          console.log(err.stack)
        } else {
        
        }
    
    //   })
   
      })
    
        db1.query('SELECT * FROM gary', (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        })
    
   

}
