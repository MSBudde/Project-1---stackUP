// $(function() {
//  var canvas1 = $('<canvas/>', { id: 'mycanvas', height: 700, width: 500});
//  canvas1.css('border', 'solid 1px red');
//  $('body').append(canvas1);
//  });

function generateTable()
{
	html = '<table id="game">\n';

	for (var i = 7; i >= 1; i--)
	{
		html += '\t<tr>\n';

		for (var j = 1; j <= 5; j++)
		{
			html += '\t\t<td id="S' + i + '' + j + '"></td>\n';
		}

		html += '\t</tr>\n';
	}

	html += '</table>';

	document.write(html);
}
