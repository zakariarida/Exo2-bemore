var express=require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
chaine = { "question": "Aimez-vous Angular ?",
			"reponsenon":"Zut !",
			"reponseoui":"Bon choix !"
};

app.post('/getReponse',function(req,res){

			if(req.body.DatVar == 'non'){
				res.json({"result":chaine.reponsenon});
			}
			else if(req.body.DatVar == 'oui'){
				res.json({"result":chaine.reponseoui});
			}
			else{
				res.json({'result':'erreur'});
			}	
});

app.get('/getQuestion',function(req,res){
	
	res.json({ "result":chaine.question});
});

console.log('Serveur Marche ... !');
app.listen(3000);

