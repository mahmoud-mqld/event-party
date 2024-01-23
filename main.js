
var initialText = "Open";

$("#btn").text(initialText);


$('#btn').on('click', function(){
    $('#left').toggleClass('menu-open');
    var newText = ($("#btn").text() == initialText) ? `  Close`  : initialText;
    $("#btn").text(newText);
    $('#nav').toggle(150).toggleClass('fixed')
    $("#btn").toggleClass("")
  });


  $('#Duration h2').on('click',function(){

    $('#Duration p').slideUp()
    $(this).next('#Duration p').slideToggle()
  })

  