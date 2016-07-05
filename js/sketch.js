console.log('connected')
//rows
var rowN = 1;
// collumn
var ColN = 0;
// starting block
var block1 = 0;
// animation direction
var direction = 1;
// block speed
var speed = [475, 350, 275, 200, 150, 90, 20];
var colTemp = 5;
var currentTime;
var blockArr = new Array(8);
var pressed = false;
var timer;

function start()
{
	for (var i = 1; i <= 7; i++)
	{
	blockArr[i] = new Array(6);

	for (var j = 1; j <= 5; j++)
		{
		blockArr[i][j] = document.getElementById('S' + i + j);
		}
	}

  function colorBlock(row, col)
  {
  	blockArr[row][col].style.backgroundColor = 'rgb(0, 255, 0)';
  }

  function clearBlock(row, col)
  {
  	blockArr[row][col].style.backgroundColor = 'transparent';
  }
}

function stack()
{
	clearTimeout(timer);

	if (rowN == 1)
	{
		currentTime = speed[rowN];
		rowN++;
		block1 = colN;
		shift();
	}
	else if (colN != block1)
	{
		lose();
	}
	else if (rowNumber == 7)
	{
		win();
	}
	else
	{
		currentTime = speed[rowN];
		rowN++;
		shift();
	}
}


// var cells = $('#test').children();
// console.log(cells)
// var index = 0;
// var keyPressed = 0;
// while(keyPressed < 10){
// 	setInterval(function(){
// 	cells.eq(index).toggleClass('animate_me');
// 	keyPressed++;
// 	index++;
// },100)
// }


// function create(){
// 	$('#s1').toggleClass('animate_me')
// }
