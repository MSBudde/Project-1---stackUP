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

var space = 0;
// var thissound = document.getElementById('thwomp')
document.body.addEventListener("keydown", function(e){
	if(e.key === " "){
		running = !running;
		space++;
		speed -= 35;
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
			 $thwomp = $('<audio autoplay> <source src="assets/Thwomp.mp3" type="audio/mpeg"></audio>')

						animateRow($currentRow.children())
		}
})
var t0 = performance.now();
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
	var mute = document.getElementById('bowser');
	mute.muted = true;
	$winner = $('<audio autoplay> <source src="assets/win.mp3"  type="audio/mpeg"></audio>')
	alert('win')

	var t1 = performance.now();
	$('#times').html((t1-t0) / 1000 + ' seconds')
}

function letsGo(){
	if($('.animate')[0].classList[0] == $('.animate')[1].classList[0]){
		space++;


} else {
	var mute = document.getElementById('bowser');
	mute.muted = true;
	$loser = $('<audio autoplay> <source src="assets/lose.mp3"  type="audio/mpeg"></audio>')
	alert('lose');
var t1 = performance.now();
$('#times').html((t1-t0) / 1000 + ' seconds')
}
}

function reset(){
		$('.animate')
}

// function EvalSound(soundobj) {
//   var thissound =document.getElementById('thwomp');
//
// }
