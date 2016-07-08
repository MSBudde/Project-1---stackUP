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
var index = $rows.length - 1
var $currentRow = $rows.eq(index);

var space = 0;
// when spacebar is pressed intiates block check to see if game continues, ups speeed
document.body.addEventListener("keydown", function(e){
	if(e.key === " "){
		running = !running;
		space++;
		speed -= 28;
		blockCheck();
		console.log($('.animate'))
		clearInterval(interval)
		continueGame();
		checkWin();

	}
})
// when spacebar is released initiates next sequence
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
	 interval =	setInterval(function(){
			if(running){
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
}
// starts game off with ongoing animation
animateRow($currentRow.children());

// checks what blocks have the class animate to see if game continues
function blockCheck(){
	$('.animate');


};
// checks if all paramaters = each other to see if you won
function checkWin(){
	if($('.animate')[0].classList[0] == $('.animate')[1].classList[0] && space == 13)
	var mute = document.getElementById('bowser');
	mute.muted = true;
	$winner = $('<audio autoplay> <source src="assets/win.mp3"  type="audio/mpeg"></audio>')
	alert('YOU WIN!!');
	$('body').append('<div id="youWin"></div>');


	var t1 = performance.now();
	$('#times').html(Math.round((t1-t0) / 1000) + ' seconds')
}

// continues game
function continueGame(){
	if($('.animate')[0].classList[0] == $('.animate')[1].classList[0]){
		space++;


} else {
	var mute = document.getElementById('bowser');
	mute.muted = true;
	$loser = $('<audio autoplay> <source src="assets/lose.mp3"  type="audio/mpeg"></audio>')
	alert('LOSER!');
	$('body').append('<div id="youLose"></div>');

var t1 = performance.now();
$('#times').html(Math.round((t1-t0) / 1000) + ' seconds')

}
}
