console.log('connected')

setInterval(function(){
  $('#block1').stop(true,true).animate({left:300},1000,
    function (){
      $(this).stop(true,true).animate({left:0},1000)
    })
},2000);
