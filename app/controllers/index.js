function play(e) {
	
	var sudokuWindows = Alloy.createController("sudoku", {
		parent:$
	}).getView();
	
	if (Titanium.Platform.name == 'android') {
			$.BottomHolder.visible = false; 
			sudokuWindows.open();
	} else {
			$.BottomHolder.visible = false; 
			sudokuWindows.backgroundImage = "background.jpeg";
   			sudokuWindows.open();
	}
}

$.index.backgroundImage = "background.jpeg";
$.index.open();