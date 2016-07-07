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
var wins = [];
var blockArray = [];

	// function check (){
	// $('.animate').each( function(i,e) {
	// 	 /* you can use e.id instead of $(e).attr('id') */
	// 	 blockArray.push($(e).attr('id'));
	// });
	// }



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
		speed -= 35;

		clearInterval(interval)
	}
})
document.body.addEventListener('keyup', function(e){
		if(e.key == ' '){
			index--;
			$currentRow = $rows.eq(index);
			running = !running;


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
			} else {

			}
		},speed)
	// }
}

animateRow($currentRow.children());

//
// function blockCheck(){
// 	if($tds.hasClass("animate")){
//  			 blocksStopped.push()
// 	}
// }
//
// ()
