const express = require('express');
const app = express();
const cors = require('cors')
const {createPool} = require('mysql')
const connection = require('../config/database');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT || 5000;
const pool = createPool({
   host:"localhost",
   database:"testdb",
   user:"root",
   password:"password",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/get', (err, res)=>{
   const sqlGet='SELECT * FROM testdb.tests LIMIT 4';
   pool.query(sqlGet, (error,result)=>{
      res.send(result);
   })
})

app.get('/api/food', (err, res)=>{
   const sqlfood='SELECT * FROM testdb.tests LIMIT 16';
   pool.query(sqlfood, (error,result)=>{
      res.send(result);
   })
})

app.get('/api/build', (err, res)=>{
   const sqlbuild='select testdb.tests.food_name,testdb.tests.image, testdb.builds.id from testdb.tests join testdb.builds where testdb.tests.id=testdb.builds.id ';
   pool.query(sqlbuild, (error,result)=>{
      res.send(result);
   })
})
// app.get('/', (err, res)=>{
//    res.send('Hello');
// });

// app.listen(port, ()=>{
//    console.log(`Server running on port ${port}`);
//    connection.connect((err)=>{
//       if(err) throw err;
//       console.log("DB Connected");
//    })
// })

app.listen(port, ()=>{
   console.log(`Server running on port ${port}`);
});

