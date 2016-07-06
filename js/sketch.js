console.log('connected')

var $game = document.getElementById('game');
var $tRow = $game.querySelectorAll('td');

var prev = 0;
var current = 0;
var running = true;
var direction = 1;
	setInterval(function(){
		if(running){

		$tRow[prev].classList.remove('animate');

		$tRow[current].classList.add('animate');
			prev = current;
			current++;
			if (current >= $tRow.length){
				current = 0;
				direction = 1;
			}
}
	},500)


	document.body.addEventListener("keydown", function(e){
	  if(e.key === " "){
	    running = !running;
	  }
	})












/
	}
}
// 		})
//
//
//
// // });var keyPressed = 0;
// // while(keyPressed < 10){
// // }
//
//
// //
// // function create(){
// // 	setInterval(function(){
// // 		$('#s1').toggleClass('animate_me')
// // },300)
// // setInterval(function(){
// // 	$('#s1').toggleClass('animate_me'    )
// //
// // },300)
// // }
