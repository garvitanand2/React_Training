exports.userData = (req,res,next) =>
{
    var bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const secretKey = 'shhh';
    const db1 = require('../controllers/db.js');
    let findByEmail= {
        text: `select * from signup where email=$1`,
        values: [req.body.email] 
    }  
    let flag;
    console.log(req.body.email);
    db1.query(findByEmail, (er, res1) => {
        console.log("length:",res1.rows.length);
        console.log( res1.rows[0])
        if (res1.rows.length > 0) {
            bcrypt.compare(req.body.pass, res1.rows[0].password, function (err, ress) {
            if (!ress) {
                flag=1;
                let flag2=JSON.stringify(flag);
                console.log(req.body.pass)
                console.log( res1.rows[0].password)
                console.log("password does not match")
                res.send(flag2);
                }
            else{
                flag=0;
                let flag2=JSON.stringify(flag);
                res.send(flag2);
                console.log("Successfully Login")
                // jwt.verify(res1.rows[0].token, secretKey, (err, token) => {
                //     res.cookie("cookie",res1.rows[0].token,{maxAge: 30*60*1000});
                //     console.log('SUCCESS: Connected to protected route');
                    //res.send("succecssfully login")
                   
                    // })
                   
                }
            });
          
        }
        else{
            flag=2;
            let flag2=JSON.stringify(flag);
            res.send(flag2);
            console.log("Email does not exist.")
            }
    });
 
}