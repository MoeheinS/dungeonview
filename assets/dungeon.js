function dungeoneer(randomness){
	//50-50 chance to go REALLY random in the gen, or something a bit more controlled
	document.querySelectorAll('.wall--l')[0].dataset.type = Math.floor(Math.random()*2);
	document.querySelectorAll('.wall--l')[1].dataset.type = Math.floor(Math.random()*2);
	document.querySelectorAll('.wall--l')[2].dataset.type = Math.floor(Math.random()*2);
	document.querySelectorAll('.wall--l')[3].dataset.type = Math.floor(Math.random()*2);
	document.querySelectorAll('.wall--l')[4].dataset.type = Math.floor(Math.random()*2);
	document.querySelectorAll('.wall--l')[5].dataset.type = Math.floor(Math.random()*2);

	if(randomness >= 2){
		document.querySelectorAll('.wall--l')[0].dataset.door = Math.floor(Math.random()*4);
		document.querySelectorAll('.wall--l')[1].dataset.door = Math.floor(Math.random()*4);
		document.querySelectorAll('.wall--l')[2].dataset.door = Math.floor(Math.random()*4);
		document.querySelectorAll('.wall--l')[3].dataset.door = Math.floor(Math.random()*4);
		document.querySelectorAll('.wall--l')[4].dataset.door = Math.floor(Math.random()*4);
		document.querySelectorAll('.wall--l')[5].dataset.door = Math.floor(Math.random()*4);
	}else{
		document.querySelectorAll('.wall--l')[0].dataset.door = 0;
		document.querySelectorAll('.wall--l')[1].dataset.door = 0;
		document.querySelectorAll('.wall--l')[2].dataset.door = 0;
		document.querySelectorAll('.wall--l')[3].dataset.door = 0;
		document.querySelectorAll('.wall--l')[4].dataset.door = 0;
		document.querySelectorAll('.wall--l')[5].dataset.door = 0;
	}

	document.querySelector('.content').dataset.type = Math.floor(Math.random()*5);
	document.querySelector('.content').dataset.dist = Math.floor(Math.random()*3)+1;
}
//window.setInterval(function(){dungeoneer()}, 3000);

//function renderDungeon(lwall1, lwall2, lwall3, rwall1, rwall2, rwall3, center){
function renderDungeon(view){
	//lwallX = [1,1];
	//left
	document.querySelectorAll('.wall--l')[0].dataset.type = view[0][0];
	document.querySelectorAll('.wall--l')[1].dataset.type = view[1][0];
	document.querySelectorAll('.wall--l')[2].dataset.type = view[2][0];

	document.querySelectorAll('.wall--l')[0].dataset.door = view[0][1];
	document.querySelectorAll('.wall--l')[1].dataset.door = view[1][1];
	document.querySelectorAll('.wall--l')[2].dataset.door = view[2][1];

	//right
	document.querySelectorAll('.wall--l')[3].dataset.type = view[3][0];
	document.querySelectorAll('.wall--l')[4].dataset.type = view[4][0];
	document.querySelectorAll('.wall--l')[5].dataset.type = view[5][0];

	document.querySelectorAll('.wall--l')[3].dataset.door = view[3][1];
	document.querySelectorAll('.wall--l')[4].dataset.door = view[4][1];
	document.querySelectorAll('.wall--l')[5].dataset.door = view[5][1];

	document.querySelector('.content').dataset.dist = view[6][0];
	document.querySelector('.content').dataset.type = view[6][1];
}