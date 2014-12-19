var args = arguments[0] || {};

function clicRetour(e) {
    $.jouer.close();
};

// pour l'instant c'est en dur, mais l'algo qui genere la grille devrait aussi donner la solution
var solution = [[3, 2]];

function verifValeur(e){
	var x = Math.floor(e.source.position/9);
	var y = e.source.position%9;
	Ti.API.info(e.value == solution[x][y]);
	// si ce qu'il a entré est bon, on verifie s'il n'a pas fini
	if(e.value == solution[x][y] && verifPartieFinie()){
		alert("Partie terminée. Felicitations");
		Ti.App.meilleurScore = calculMeilleurScore();
		args.parent.meilleurScore.text = Ti.App.meilleurScore; 
		$.jouer.close();
	}
};

function verifPartieFinie(){
	flag = true;
	for(var i=0; i<81; i++){
		if($['case'+i] && $['case'+i].value != solution[Math.floor(i/9)][i%9])
			flag = false;
	}
	return flag;
};

function calculMeilleurScore(){
	//en dur pour l'instant, faut trouver l'algo :)
	return 10;
}