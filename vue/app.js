const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.listen(2133);

var json = {
	'leo':'111'
}

server.use(bodyParser.urlencoded());

server.use('/getPost',function(req,res){
	console.log(req.body);
	if(json[req.body.user] ==  req.body.pass){
		res.send({ok:1,'msg':'登陆成功'});
	}
	else{
		res.send({ok:0,'msg':'用户名或密码错误'});
	}
});

server.use('/getMsg',function(req,res){
	console.log(req.query);
	if(json[req.query.user] ==  req.query.pass){
		res.send({ok:1,'msg':'登陆成功'});
	}
	else{
		res.send({ok:0,'msg':'用户名或密码错误'});
	}
		//req.query = { user: 'leo', pass: '111' }
		//json['leo']
		// 111 == 111
	//res.send();
})

server.use(express.static('./'))