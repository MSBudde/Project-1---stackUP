console.log('connected')
var interval;
var $game = document.getElementById('game');
var $rows = $('.row');
var $tds = $('td')
var prev = 0;
var current = 0;
var running = true;
var speed = 250;
var rowNumb = $rows.eq(6);
// var direction = 1;
var index = $rows.length - 1
var $currentRow = $rows.eq(index);
var blocksStopped = [];
var blockArray = [1,2,3,4,5,6];
var space = 0;


document.body.addEventListener("keydown", function(e){
	if(e.key === " "){
		running = !running;
		space++;
		// speed -= 35;
		blockCheck();
		console.log($('.animate'))
		clearInterval(interval)
		letsGo();
		checkWin();
	}
})
document.body.addEventListener('keyup', function(e){
		if(e.key == ' '){
			index--;
			$currentRow = $rows.eq(index);
			running = !running;
				// checkWin();
				animateRow($currentRow.children())
		}
})
function animateRow(cells){
	// for(var i = 0;i < cells.length;i++){
	 interval =	setInterval(function(){
			if(running){
				// console.log(cells)
				cells[prev].classList.remove('animate');
				cells[current].classList.add('animate');
				prev = current;
				current++;
				if (current >= cells.length){
					current = 0;

				}
			} else if (true) {

			} {

			}
		},speed)
	// }
}

animateRow($currentRow.children());

//
function blockCheck(){
	$('.animate');


};

function checkWin(){
	if($('.animate')[0].classList[0] == $('.animate')[1].classList[0] && space == 13)
	alert('win')
}

function letsGo(){
	if($('.animate')[0].classList[0] == $('.animate')[1].classList[0]){
		space++;


} else {
	alert('lose');
}
}
