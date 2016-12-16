// fade in on home screen //
function fadeInHome() {
	$('#home-content').animate({opacity:1}, 2500);
}

// get stocks for each character and stock total set up //
function setUpStocks() {
	// if new game, create stock arrays //
	if (typeof p1Stocks === 'undefined'){
	
		// set up p1 stock arrays //
		p1Stocks = new Object();
		p1Stocks['p1-luigi'] = 5;
		p1Stocks['p1-mario'] = 5;
		p1Stocks['p1-dk'] = 5;
		p1Stocks['p1-link'] = 5;
		p1Stocks['p1-samus'] = 5;
		p1Stocks['p1-falcon'] = 5;
		p1Stocks['p1-ness'] = 5;
		p1Stocks['p1-yoshi'] = 5;
		p1Stocks['p1-kirby'] = 5;
		p1Stocks['p1-fox'] = 5;
		p1Stocks['p1-pikachu'] = 5;
		p1Stocks['p1-jigglypuff'] = 5;
		
		// set up p2 stock arrays //
		p2Stocks = new Object();
		p2Stocks['p2-luigi'] = 5;
		p2Stocks['p2-mario'] = 5;
		p2Stocks['p2-dk'] = 5;
		p2Stocks['p2-link'] = 5;
		p2Stocks['p2-samus'] = 5;
		p2Stocks['p2-falcon'] = 5;
		p2Stocks['p2-ness'] = 5;
		p2Stocks['p2-yoshi'] = 5;
		p2Stocks['p2-kirby'] = 5;
		p2Stocks['p2-fox'] = 5;
		p2Stocks['p2-pikachu'] = 5;
		p2Stocks['p2-jigglypuff'] = 5;
	}
	// if game has been played already, reset stocks, show all stock icons, and restore opacity to character images
	else {
		for(var character in p1Stocks) {
  			p1Stocks[character] = 5;
  			for (i = 1; i < 6; i++) { 
	    		showStock = document.getElementById(character+ '-stock' + i);
	    		$(showStock).show();
			}
		}
		var charList1 = document.getElementsByClassName("char-img1");
		for (i = 0; i < charList1.length; i++) {
		    charList1[i].style.opacity = '1';
		}
		for(var character in p2Stocks) {
  			p2Stocks[character] = 5;
  			for (i = 1; i < 6; i++) { 
	    		showStock = document.getElementById(character+ '-stock' + i);
	    		$(showStock).show();
			}
		}
		var charList2 = document.getElementsByClassName("char-img2");
		for (i = 0; i < charList2.length; i++) {
		    charList2[i].style.opacity = '1';
		}
		updateStockCount();
	}
}

// grabs entered player names and sets them on game screen //
function setPlayerNames() {
	 var player1Name = document.getElementById('player1-entry').value;
	 var player2Name = document.getElementById('player2-entry').value;
	 if(player1Name != "") {
	 	document.getElementById("player1-name").innerHTML = player1Name;
	 }
	 if(player2Name != "") {
	 	document.getElementById("player2-name").innerHTML = player2Name;
	 }
}

// updates players stock counts //
function updateStockCount() {
	var p1Total = 0;
	for(var key in p1Stocks) {
  			p1Total += p1Stocks[key];
		}
	document.getElementById("p1-stock-count").innerHTML = 'Stock Count: ' + p1Total;
	var p2Total = 0;
	for(var key in p2Stocks) {
  			p2Total += p2Stocks[key];
		}
	document.getElementById("p2-stock-count").innerHTML = 'Stock Count: ' + p2Total;
}

// handles clicks on player 1 character images, hides/shows appropriate stock icons, changes image opacity, updates stock count //
function player1CharClick(imgID) {
	var character = imgID;
    if(p1Stocks[character] == 5) {
    	hideStock = document.getElementById(character + '-stock5');
    	$(hideStock).hide();
    	p1Stocks[character] = 4;
    	updateStockCount();
    }
    else if(p1Stocks[character] == 4) {
    	hideStock = document.getElementById(character + '-stock4');
    	$(hideStock).hide();
    	p1Stocks[character] = 3;
    	updateStockCount();
    }
    else if(p1Stocks[character] == 3) {
    	hideStock = document.getElementById(character + '-stock3');
    	$(hideStock).hide();
    	p1Stocks[character] = 2;
    	updateStockCount();
    }
    else if(p1Stocks[character] == 2) {
    	hideStock = document.getElementById(character + '-stock2');
    	$(hideStock).hide();
    	p1Stocks[character] = 1;
    	updateStockCount();
    }
    // at 0 stocks lower character image opacity //
    else if(p1Stocks[character] == 1) {
    	hideStock = document.getElementById(character + '-stock1');
    	$(hideStock).hide();
    	p1Stocks[character] = 0;
    	updateStockCount();
    	img = document.getElementById(character);
    	img.style.opacity = '0.5';
    }
    // when clicked at 0 stocks, restore stocks and restore image opacity //
    else if(p1Stocks[character] == 0) {
    	for (i = 1; i < 6; i++) { 
    		showStock = document.getElementById(character + '-stock' + i);
    		$(showStock).show();
		}
    	p1Stocks[character] = 5;
    	updateStockCount();
    	img = document.getElementById(character);
    	img.style.opacity = '1';
    }
	
}

// handles clicks on player 2 character images, hides/shows appropriate stock icons, changes image opacity, updates stock count //
function player2CharClick(imgID) {
    var character = imgID;
    if(p2Stocks[character] == 5) {
    	hideStock = document.getElementById(character + '-stock5');
    	$(hideStock).hide();
    	p2Stocks[character] = 4;
    	updateStockCount();
    }
    else if(p2Stocks[character] == 4) {
    	hideStock = document.getElementById(character + '-stock4');
    	$(hideStock).hide();
    	p2Stocks[character] = 3;
    	updateStockCount();
    }
    else if(p2Stocks[character] == 3) {
    	hideStock = document.getElementById(character + '-stock3');
    	$(hideStock).hide();
    	p2Stocks[character] = 2;
    	updateStockCount();
    }
    else if(p2Stocks[character] == 2) {
    	hideStock = document.getElementById(character + '-stock2');
    	$(hideStock).hide();
    	p2Stocks[character] = 1;
    	updateStockCount();
    }
    // at 0 stocks lower character image opacity //
    else if(p2Stocks[character] == 1) {
    	hideStock = document.getElementById(character + '-stock1');
    	$(hideStock).hide();
    	p2Stocks[character] = 0;
    	updateStockCount();
    	img = document.getElementById(character);
    	img.style.opacity = '0.5';
    }
    // when clicked at 0 stocks, restore stocks and restore image opacity //
    else if(p2Stocks[character] == 0) {
    	for (i = 1; i < 6; i++) { 
    		showStock = document.getElementById(character + '-stock' + i);
    		$(showStock).show();
		}
    	p2Stocks[character] = 5;
    	updateStockCount();
    	img = document.getElementById(character);
    	img.style.opacity = '1';
    }
	
}


// when document is ready, start doin shit //
$( document ).ready(function() {
	// call fadeInHome function //
	fadeInHome();
	
	// binds setUpStocks to create-game button //
	$('.create-game-button').click(function(){
		setUpStocks();
	});
	
	// binds setPlayerNames to lets-go button
	$('.lets-go-button').click(function(){
		setPlayerNames();
	});
	
	// binds player1CharClick to all player 1 character images //
	$('.char-img1').click(function(){
	    player1CharClick(this.id);
	});
	
	// binds player2CharClick to all player 2 character images //
	$('.char-img2').click(function(){
	    player2CharClick(this.id);
	});
	
});

