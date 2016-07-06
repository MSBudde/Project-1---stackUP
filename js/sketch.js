console.log('connected')
var interval;
var $game = document.getElementById('game');
var $rows = $('.row');
var prev = 0;
var current = 0;
var running = true;
var speed = 200;
// var direction = 1;
var index = $rows.length - 1
var $currentRow = $rows.eq(index);

// setInterval(function(){
// 	if(running){
//
//
// 	$tRow[prev].classList.remove('animate');
//
// 	$tRow[current].classList.add('animate');
// 		prev = current;
// 		current++;
// 		if (current >= $tRow.length){
//
// 			current = 0;
//
// 		}
// 	}
// },200)
document.body.addEventListener("keydown", function(e){
	if(e.key === " "){
		running = !running;
		speed - 50;
		clearInterval(interval)
	}
})
document.body.addEventListener('keyup', function(e){
		if(e.key == ' '){
			index--;
			$currentRow = $rows.eq(index)
			running = !running;
			animateRow($currentRow.children())
		}
})
function animateRow(cells){
	// for(var i = 0;i < cells.length;i++){
	 interval =	setInterval(function(){
			if(running){
				console.log(cells)
				cells[prev].classList.remove('animate');
				cells[current].classList.add('animate');
				prev = current;
				current++;
				if (current >= cells.length){
					current = 0;
				}
			} else {

			}
		},speed)
	// }
}

animateRow($currentRow.children());


function win(){

}
