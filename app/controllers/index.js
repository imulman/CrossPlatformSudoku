function doClick(e) {
    alert($.label.text);
    console.log(Ti.App.myGlobalVar);
}

function jouer(e) {
    var jouer = Alloy.createController("jouer", {
    	parent:$
    });
    jouer.getView().open();
}

$.index.open();

// variable globale, pas de persistence de ce cote la pour l'instant
Ti.App.meilleurScore = 0;

$.meilleurScore.text = Ti.App.meilleurScore;