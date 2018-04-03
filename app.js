const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const app = express();



app.use(bodyparser.urlencoded({  }))
const pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'',
	database:'demo',
	port:3306
})
app.use('/',(req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	pool.getConnection((err,con)=>{
		if(err) throw err;
		con.query(`SELECT * FROM list WHERE status='${req.body.status}'`,(err,rows)=>{
			console.log(req.body.status)
			if(err) throw err;
			res.send(rows);
			con.release()
		})
	})
})
app.listen(1000,()=>{
	console.log('ok')
});