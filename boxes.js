$(document).ready(function(){
  //exercise 1
  alert("DOM ready for manipulation.  Let 'er rip. ");
  //exercise 2
  $('#secretBox').attr('style', 'background-color: white');
  $('#secretBox').append('<h1>Secret Box!</h1>')
  $('#row1').children().removeClass("boxType1 boxType2").addClass("boxType3")
  $( "ul.level-2" ).children().css( "background-color", "red" );
  $('#row4 div:last-child').css('display', 'none');
  $('.boxType1').css('background-color', 'white');
  $('#row2').children().slice(0,2).removeClass("boxType2 boxType3");
  $('.boxType1, .boxType2, .boxType3').css('width', '2px');
});
