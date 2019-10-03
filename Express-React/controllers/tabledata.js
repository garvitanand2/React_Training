const db1 = require('../controllers/db.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.insertdata = (req, res1) => {
    const secretKey = 'shhh';
    let  token;
    let pass;
    let findByEmail= {
        text: `select from signup where email=$1`,
        values: [req.body.email] 
    }  
    let insertData = {
        text: `INSERT INTO signup (id,name,email,password,token) values(DEFAULT ,$1,$2,$3,$4)`,
        values : [req.body.username,req.body.email,pass,"momoimissu"]
    } 

    bcrypt.hash(req.body.pass, 10, (err, hash) => {
        console.log("hash password== ",hash);
        insertData.values[2]=hash;
        const expiresIn = 24 * 60 * 60;
        token = jwt.sign( { email:insertData.values[1]} , secretKey, {
            expiresIn: expiresIn
        });
        console.log("value of token ",token);
        insertData.values[3]=token;
        db1.query(findByEmail, (req,res2)=>{
            if(res2.rows.length > 0){
                res1.send("Email already exists")
            }
            else{
                db1.query(insertData,(req,res)=>{
                    console.log("data add hogya ");
               //    res1.send("data add hogya ");
                })
                db1.query(findByEmail, (er, res3) => {
                    jwt.verify(res3.rows[0].token, secretKey, (err, token) => {
                        res1.cookie("cookie",res3.rows[0].token,{maxAge: 48*60*60});
                        console.log('SUCCESS: Connected to protected route');
                    })   
                })
            } 
        })
    })
}

 